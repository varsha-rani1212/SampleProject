import styles from "./FavouriteVideos.module.css";
import DisplayFavData from "./DisplayFavData";

function FavouriteVideos(props) {
  return (
    <div className={styles.containerDisplay}>
      {props.loadedFavData.length > 0 ? (
        props.loadedFavData.map((data) => {
          return (
            <>
              <DisplayFavData
                key={data.email}
                videoEmail={data.email}
                VideoUrl={data.videoFavUrl}
                videoTitle={data.title}
                videoUploadUserFirstName={data.firstName}
                videoUploadUserLastName={data.lastName}
                videoUploadDate={data.date}
              />
            </>
          );
        })
      ) : <p></p> }
    </div>
  );
}

export default FavouriteVideos;
