import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./CheckData.module.css";
import { MdOutlineNoteAlt } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addNotesVideoUrlActions } from "../../store/addNotesVideoUrl-slice";

import { uid } from "uid";
import { set, remove } from "firebase/database";
import { ref as Database_Ref } from "firebase/database";
import { db } from "../Firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CheckData(props) {
  const [showAddFav, setShowAddFavHandler] = useState(true);
  const [loadedFavData, setLoadedFavData] = useState([]);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
  const history = useHistory();
  const dispatch = useDispatch();
  let email;

  if (flagCheckSignInMethod === 0) email = signInUserInfo.email;
  else email = googleData.email;

  useEffect(() => {
    const fetchUserFavouriteVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/Favourite.json"
      );
      const responseData = await response.json();
      const tempData = [];

      for (const key in responseData) {
        tempData.push({
          key: responseData[key].UserEmail,
          id: responseData[key].id,
          Email: responseData[key].UserEmail,
          videoFavUrl: responseData[key].Url,
        });
      }
      setLoadedFavData(tempData);

      for(let i=0; i<tempData.length; i++){
        if(tempData[i].Email === email && tempData[i].videoFavUrl === props.VideoUrl){
          setShowAddFavHandler(false);
        }
      }
    };
    fetchUserFavouriteVideoData();
  },[showAddFav]);

  function onAddToFavHandler() {
    const uuid = uid();
    set(Database_Ref(db, `/Favourite/${uuid}`), {
      id: uuid,
      Title: props.videoTitle,
      UploderFirstName: props.videoUploadUserFirstName,
      UploderLastName: props.videoUploadUserLastName,
      UploadDate: props.videoUploadDate,
      Url: props.VideoUrl,
      UserEmail: email,
    });

    setShowAddFavHandler(false);
    console.log(loadedFavData);
  }

  function onRemoveFromFavHandler() {
    for(let i=0; i<loadedFavData.length; i++){
      if(loadedFavData[i].Email === email && loadedFavData[i].videoFavUrl === props.VideoUrl){
       remove(Database_Ref(db, `/Favourite/${loadedFavData[i].id}`));
        break;
      }
    }

    setShowAddFavHandler(true);
    console.log(loadedFavData);
  }

  function onAddNotesHandler(){
    dispatch(addNotesVideoUrlActions.setVideoUrl(props.VideoUrl))
    history.push("/MainPage/ShowAllVideos/AddBookmark");
  }

  return (
    <div className={styles.container}>
      <ReactPlayer controls height="170px" width="200px" url={props.VideoUrl} />
      <p className={styles.videoTitle}>
        <label>{props.videoTitle}</label>
        <MdOutlineNoteAlt onClick={onAddNotesHandler}/>
      </p>
      <br />
      <p className={styles.uploadUserName}>
        {props.videoUploadUserFirstName}&nbsp;{props.videoUploadUserLastName}{" "}
        <label className={styles.divisionLineBoldDisplay}>|</label>{" "}
        {props.videoUploadDate}
      </p>
      {showAddFav && (
        <button
          className={styles.addToFavouriteVideo}
          onClick={onAddToFavHandler}
        >
          Add to Favorite
        </button>
      )}
      {!showAddFav && (
        <button
          className={styles.RemoveFromFavouriteVideo}
          onClick={onRemoveFromFavHandler}
        >
          Remove from Favorite
        </button>
      )}
    </div>
  );
}

export default CheckData;
