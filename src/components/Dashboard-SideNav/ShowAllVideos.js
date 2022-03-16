import CheckData from "./CheckData";
import styles from "./ShowAllVideos.module.css";

function ShowAllVideos(props) {
  return (
    <>
      <div className={styles.containerDisplay}>
        {props.loadedData.length > 0 ? props.loadedData.map((data) => {
          return (
            <>
              <CheckData
                key={data.Email}
                videoEmail={data.Email}
                VideoUrl={data.videoUrl}
                videoTitle={data.title}
                videoUploadUserFirstName={data.firstName}
                videoUploadUserLastName={data.lastName}
                videoUploadDate={data.date}
              />
            </>
          );
        }) : <p></p>}
      </div>
    </>
  );
}

export default ShowAllVideos;
