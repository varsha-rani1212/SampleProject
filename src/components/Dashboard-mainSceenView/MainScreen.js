import styles from "./MainScreen.module.css";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showHideIconActions } from "../../store/showHideIcon-slice";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function MainScreen() {
  const [loadedData, setloadedData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/videos.json"
      );
      const responseData = await response.json();
      const tempData = [];
      let count = 0;

      for (const key in responseData) {
         if(count < 9){
          tempData.push({
            date: responseData[key].Date,
            firstName: responseData[key].FirstName,
            lastName: responseData[key].LastName,
            Email: responseData[key].Email,
            title: responseData[key].Title,
            videoUrl: responseData[key].VideosUrl,
          });
         }
         count++;
      }
      setDataLength(count);
      setloadedData(tempData);
    };
    fetchAllVideoData();
  }, []);

  function seeAllVideoHandler() {
    dispatch(showHideIconActions.setAllVideos());
    history.push("/MainPage/ShowAllVideos");
  }

  return (
    <div className={styles.UploadedVideoSlider}>
      <div className={styles.displayHeadingCarousalContent}>
        <label className={styles.CarouselHeading}>
          &nbsp;&nbsp;All Videos&nbsp;({dataLength})
        </label>

        <label className={styles.seeAllVideos} onClick={seeAllVideoHandler}>
          See all Videos
        </label>
      </div>
      <Carousel breakPoints={breakPoints}>
        {loadedData.length > 0 ? (
          loadedData.map((v, i) => (
            <div className={styles.item} key={i}>
              <ReactPlayer
                height="210px"
                width="250px"
                url={v.videoUrl}
                className={styles.reactPlayer}
              />
              <p className={styles.videoTitle}>{v.title}</p>
              <br />
              <p className={styles.uploadUserName}>
                {v.firstName}&nbsp;
                {v.lastName}&nbsp;
                <label className={styles.divisionLineBoldDisplay}>|</label>
                &nbsp;
                {v.date}
              </p>
              <br />
              <hr />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </Carousel>
    </div>
  );
}

export default MainScreen;
