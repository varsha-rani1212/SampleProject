import styles from "./MainScreen.module.css";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function FavouriteMainScreen() {
  const [loadedData, setloadedData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
  const history = useHistory();
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
      let count = 0;

      for (const key in responseData) {
        if (responseData[key].UserEmail === email) {
          if (count < 9) {
            tempData.push({
              key: responseData[key].UserEmail,
              title: responseData[key].Title,
              date: responseData[key].UploadDate,
              firstName: responseData[key].UploderFirstName,
              lastName: responseData[key].UploderLastName,
              videoFavUrl: responseData[key].Url,
              email: responseData[key].UserEmail,
            });
          }
          count++;
        }
      }
      setDataLength(count);
      setloadedData(tempData);
    };
    fetchUserFavouriteVideoData();
  }, []);

  function seeAllVideoHandler() {
    history.push("/MainPage/FavouriteVideos");
  }

  return (
    <div className={styles.UploadedVideoSlider}>
      <div className={styles.displayHeadingCarousalContent}>
        <label className={styles.CarouselHeading}>
          &nbsp;&nbsp;Favourite Videos&nbsp;({dataLength})
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
                url={v.videoFavUrl}
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

export default FavouriteMainScreen;
