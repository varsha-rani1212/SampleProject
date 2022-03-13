import { storage } from "../Firebase";
import {
  getDownloadURL,
  ref as Storage_Ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./UploadVideo.module.css";
import validator from "validator";
import { videoUrlActions } from "../../store/videoUrl-slice";
import { uid } from "uid";
import { set } from "firebase/database";
import { ref as Database_Ref } from "firebase/database";
import { db } from "../Firebase";
import { useSelector } from "react-redux";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [progress, setProgess] = useState(0);
  const dispatch = useDispatch();

  let userFirstName, userLastName, userEmail;
  const dtToday = new Date();

  let month = dtToday.getMonth() + 1;
  let day = dtToday.getDate();
  let year = dtToday.getFullYear();

  if(month < 10)
      month = '0' + month.toString();
  if(day < 10)
      day = '0' + day.toString();

  const maxDate = year + '-' + month + '-' + day; 

  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);

  if (flagCheckSignInMethod === 0) userFirstName = signInUserInfo.firstName;
  else userFirstName = googleData.givenName;

  if (flagCheckSignInMethod === 0) userLastName = signInUserInfo.lastName;
  else userLastName = googleData.familyName;

  if (flagCheckSignInMethod === 0) userEmail = signInUserInfo.email;
  else userEmail = googleData.email;


  function titleHandler(event) {
    setTitle(event.target.value);
    dispatch(videoUrlActions.setTitle(event.target.value));
  }

  function dateHandler(event) {
    setDate(event.target.value);
    dispatch(videoUrlActions.setDate(event.target.value));
    console.log(event.target.value);
  }

  function validationTitleHandler(event) {
    for (let i = 0; i < event.target.value.length; i++) {
      if (
        validator.isAlpha(event.target.value[i]) ||
        event.target.value[i] === " "
      ) {
        setTitleValid(true);
      } else {
        setTitleValid(false);
      }
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (date === "") {
      alert("Please enter your data/ Please correct your input Credential!");
      return;
    }
    const file = event.target[0].files[0];
    uploadFiles(file);
  }

  function uploadFiles(file) {
    if (!file) {
      alert("Please Select your File");
      return;
    }
    const storageRef = Storage_Ref(storage, `/files/${file.name}`);            //storage ref
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgess(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          dispatch(videoUrlActions.setUrl(url));
         //  const bodyTitle = {name: "varsha"};      no support for array and object store in firebase
          // const bodyDate = [];
          // const bodyUrl = [];

          // bodyTitle.push(title);
          // bodyDate.push(date);
          // bodyUrl.push(url);
          // console.log(bodyTitle);

          const uuid = uid();
          set(Database_Ref(db, `/videos/${uuid}`), {
            //database ref
            FirstName: userFirstName,
            LastName: userLastName,
            Email: userEmail,
            Title: title,
            Date: date,
            VideosUrl: url,
            favourite: false,
          });

          setProgess(0);
          setTitle("");
          setDate("");
        });
      }
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.uploadArea}>
        <h1>Details About Video:</h1>
        <br />

        <div className={styles.firstRowInput}>
          <span className={styles.titleFirstInput}>
            <label>Title:</label>&nbsp;&nbsp;
            <input
              type="text"
              value={title}
              onChange={titleHandler}
              onBlur={validationTitleHandler}
            />
            {!titleValid && (
              <p className={styles.errorText}>
                Title should contain only alphabet
              </p>
            )}
          </span>
        </div>
        <br />

        <div className={styles.firstRowInput}>
          <span className={styles.titleFirstInput}>
            <label>Date:</label>&nbsp;&nbsp;
            <input type="date" value={date} onChange={dateHandler} max={maxDate}/>
          </span>
        </div>
        <br />
        <br />

        <form onSubmit={onSubmitHandler}>
          <div className={styles.uploadVideoInput}>
            <label>Upload File:</label>&nbsp;
            <input
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
            />
          </div>
          <br />

          <div className={styles.uploadVideoButton}>
            <button type="submit">UPLOAD</button>
          </div>
          <br />
        </form>

        <div className={styles.progressBar}>
          <label>Uploaded:&nbsp; {progress} %</label>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
