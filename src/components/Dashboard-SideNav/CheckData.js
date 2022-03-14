import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./CheckData.module.css";

function CheckData(props) {
  const [showAddFav, setShowAddFavHandler] = useState(true);

  function onAddToFavHandler(){
    setShowAddFavHandler(false);
  }

  function onRemoveFromFavHandler(){
    setShowAddFavHandler(true);
  }

  return (
    <div className={styles.container}>
      <ReactPlayer controls height="170px" width="200px" url={props.VideoUrl} />
      <p className={styles.videoTitle}>{props.videoTitle}</p>
      <br />
      <p className={styles.uploadUserName}>
        {props.videoUploadUserFirstName}&nbsp;{props.videoUploadUserLastName}{" "}
        <label className={styles.divisionLineBoldDisplay}>|</label>{" "}
        {props.videoUploadDate}
      </p>
      {showAddFav && <button className={styles.addToFavouriteVideo} onClick={onAddToFavHandler}>Add to Favorite</button>}
      {!showAddFav && <button className={styles.RemoveFromFavouriteVideo} onClick={onRemoveFromFavHandler}>Remove from Favorite</button>}
    </div>
  );
}

export default CheckData;
