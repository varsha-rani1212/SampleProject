import { useEffect, useState } from "react";
import CheckData from "./CheckData";
import styles from "./ShowAllVideos.module.css";

function ShowAllVideos() {
  const [loadedData, setloadedData] = useState([]);

  useEffect(() => {
    const fetchUserUploadVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/videos.json"
      );
      const responseData = await response.json();

      const tempData = [];

      for (const key in responseData) {
        tempData.push({
          date: responseData[key].Date,
          firstName: responseData[key].FirstName,
          lastName: responseData[key].LastName,
          Email: responseData[key].Email,
          title: responseData[key].Title,
          videoUrl: responseData[key].VideosUrl,
          fav: responseData[key].favourite,
        });
      }

      setloadedData(tempData);
    };
    fetchUserUploadVideoData();
  }, []);

  return (
    <>
      <div className={styles.containerDisplay}>
        {loadedData.length > 0 ? loadedData.map((data) => {
          return (
            <>
              <CheckData
                VideoUrl={data.videoUrl}
                videoTitle={data.title}
                videoUploadUserFirstName={data.firstName}
                videoUploadUserLastName={data.lastName}
                videoUploadDate={data.date}
                videoId={data.id}
              />
            </>
          );
        }) : <p>NO VIDEOS IS AVAILABLE</p>  }
      </div>
    </>
  );
}

export default ShowAllVideos;
