import ReactPlayer from "react-player";
import styles from "./CheckData.module.css";


function DisplayFavData(props){

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
          <hr />
        </div>
      );

}

export default DisplayFavData;