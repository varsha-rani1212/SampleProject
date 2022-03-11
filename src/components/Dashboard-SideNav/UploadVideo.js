<<<<<<< HEAD
import { storage } from "../Firebase";
import {getDownloadURL, ref ,uploadBytesResumable,} from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./UploadVideo.module.css";
import validator from "validator";
import { videoUrlActions } from "../../store/videoUrl-slice";

/*-------------------------------
realtime database import

import { uid } from 'uid';
import { set } from 'firebase/database';
import { ref }  from 'firebase/database';
import { db } from '../Firebase';
import { useSelector } from "react-redux";
---------------------------------*/

=======
import { storage } from '../Firebase';
import { videoUrlActions } from '../../store/videoUrl-slice';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './UploadVideo.module.css';
import backgroundImageUpload from '../../images/background.jpeg';

>>>>>>> bb4dbef63f7ec836118758399164a292242613c2
function UploadVideo() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [progress, setProgess] = useState(0);
  const dispatch = useDispatch();

  /*-------------------------------------------
  realtime database: setting values of firstName, lastName, Email:

  let userFirstName, userLastName, userEmail;

  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);

  if(flagCheckSignInMethod === 0)
   userFirstName = signInUserInfo.firstName;
  else
   userFirstName = googleData.givenName;

  if(flagCheckSignInMethod === 0)
   userLastName = signInUserInfo.lastName;
  else
   userLastName = googleData.familyName;

  if(flagCheckSignInMethod === 0)
   userEmail= signInUserInfo.email;
  else
   userEmail = googleData.email;

  -----------------------------------------------*/

  function titleHandler(event) {
    setTitle(event.target.value);
    dispatch(videoUrlActions.setTitle(event.target.value));
  }

  function dateHandler(event) {
    setDate(event.target.value);
    dispatch(videoUrlActions.setDate(event.target.value));
  }

  function validationTitleHandler(event) {
    if (!validator.isAlpha(event.target.value)) {
      setTitleValid(false);
    } else {
      setTitleValid(true);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (!validator.isAlpha(title) || date === "") {
      alert("Please enter your data/ Please correct your input Credential!");
      return;
    }
    const file = event.target[0].files[0];
   // console.log(file);
    uploadFiles(file);
  }

  function uploadFiles(file) {
    if (!file) {
      alert("Please Select your File");
      return;
    }
   const storageRef = ref(storage, `/files/${file.name}`);                 //storage ref
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
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
          setProgess(0);
          setTitle("");
          setDate("");

    /*-----------------------
    store data in realtime database

        const uuid = uid();
        set(ref(db, `/videos/${uuid}`), {                        //database ref
        FirstName: userFirstName,
        LastName: userLastName,
        Email: userEmail,
        Title: title,
        Date: date,
        VideosUrl: url,
      });

      -----------------------*/
        });
      }
    );
<<<<<<< HEAD

    /*-------------------------------------------
    just for checking purpose :

    const uuid = uid();
    set(ref(db, `/videos/${uuid}`), {
    FirstName: userFirstName,
    LastName: userLastName,
    Email: userEmail,
    Title: title,
    Date: date,
    VideosUrl: "varsha",      /* url 
  });

  ---------------------------------------------*/

=======
>>>>>>> bb4dbef63f7ec836118758399164a292242613c2
  }

  return (
    <div className={styles.container}>
      <div className={styles.uploadArea}>
<<<<<<< HEAD
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
            <input type="date" value={date} onChange={dateHandler} />
          </span>
        </div>
        <br />
        <br />

        <form onSubmit={onSubmitHandler}>
          <div className={styles.uploadVideoInput}>
            <label>Upload File:</label>&nbsp;
            <input type="file" />
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
=======
        <form onSubmit={formHandler}>
          <br />
          <input type="file" />
          &nbsp;
          <button type="submit">Upload</button>
          <h2>Uploaded {progress} %</h2>
        </form>
>>>>>>> bb4dbef63f7ec836118758399164a292242613c2
      </div>
    </div>
  );
}

export default UploadVideo;
