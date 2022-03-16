import DisplayFavData from "../Dashboard-SideNav/DisplayFavData";
import styles from "../Dashboard-SideNav/FavouriteVideos.module.css";

function ShowAllUserUploadedVideos(props) {
  return (
    <div className={styles.containerDisplay}>
      {props.loadedData.length > 0 ? (
        props.loadedData.map((data) => {
          return (
            <>
              <DisplayFavData
                key={data.email}
                videoEmail={data.email}
                VideoUrl={data.videoUrl}
                videoTitle={data.title}
                videoUploadUserFirstName={data.firstName}
                videoUploadUserLastName={data.lastName}
                videoUploadDate={data.date}
              />
            </>
          );
        })
      ) : <p></p>}
    </div>
  );
}

export default ShowAllUserUploadedVideos;
