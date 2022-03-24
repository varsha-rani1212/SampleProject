import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import ShowAllVideos from '../Dashboard-SideNav/ShowAllVideos';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { headingOfPageActions }  from "../../store/headingOfPage-slice";

function ShowAllVideosPage() {
  const [loadedData, setloadedData] = useState([]);
  const dispatch = useDispatch();
  dispatch(headingOfPageActions.setHeading("All Videos"));

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
        });
      }
      setloadedData(tempData);
    };
    fetchUserUploadVideoData();
  }, []);

  return (
    <>
      <Header />
      <div className={`${loadedData.length < 6 && styles.containerReset} ${loadedData.length > 6 && styles.container}`}>
        <div className={styles.mainArea}>
          <SideNavigation />
          <ShowAllVideos  loadedData = {loadedData}/>
        </div>
      </div>
    </>
  );
}

export default ShowAllVideosPage;