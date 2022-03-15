import styles from "./MainScreen.module.css";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const tempData = [];

function MainScreen() {
  const [loadedData, setloadedData] = useState([]);

  useEffect(() => {
    const fetchUserUploadVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/videos.json"
      );
      const responseData = await response.json();

      for (const key in responseData) {
        tempData.push({
          date: responseData[key].Date,
          firstName: responseData[key].FirstName,
          lastName: responseData[key].LastName,
          Email: responseData[key].Email,
          title: responseData[key].Title,
          videoUrl: responseData[key].VideosUrl,
        });
      }
    };
    setloadedData(tempData);
    fetchUserUploadVideoData();
  }, []);

  return (
    <div className={styles.UploadedVideoSlider}>
      <h2>&nbsp;&nbsp;Uploaded Videos</h2>
      <Carousel breakPoints={breakPoints}>
        <div className={styles.item}>
          <ReactPlayer
            controls
            height="210px"
            width="250px"
            url="https://firebasestorage.googleapis.com/v0/b/loginproject-28b6c.appspot.com/o/files%2FWhatsApp%20Video%202022-03-07%20at%205.42.45%20PM.mp4?alt=media&token=3f9c98b2-f31d-4727-8dc7-567f9cf4b340"
            className={styles.reactPlayer}
          />
        </div>
        <div className={styles.item}>
          <ReactPlayer
            controls
            height="210px"
            width="250px"
            url="https://firebasestorage.googleapis.com/v0/b/loginproject-28b6c.appspot.com/o/files%2FWhatsApp%20Video%202022-03-07%20at%205.42.45%20PM.mp4?alt=media&token=3f9c98b2-f31d-4727-8dc7-567f9cf4b340"
            className={styles.reactPlayer}
          />
        </div>
        <div className={styles.item}>
          <ReactPlayer
            controls
            height="210px"
            width="250px"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            className={styles.reactPlayer}
          />
        </div>
        <div className={styles.item}>
          <ReactPlayer
            controls
            height="210px"
            width="250px"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            className={styles.reactPlayer}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MainScreen;
