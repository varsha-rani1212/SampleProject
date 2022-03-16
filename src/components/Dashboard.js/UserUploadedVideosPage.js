import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowAllUserUploadedVideos from './ShowAllUserUploadedVideos';

function UserUploadedVideosPage(){
  const [loadedData, setloadedData] = useState([]);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
  let email;

  if (flagCheckSignInMethod === 0) email = signInUserInfo.email;
  else email = googleData.email;

  useEffect(() => {
    const fetchUserUploadVideoData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/videos.json"
      );
      const responseData = await response.json();
      const tempData = [];

      for (const key in responseData) {
        if (responseData[key].Email === email) {
          tempData.push({
            date: responseData[key].Date,
            firstName: responseData[key].FirstName,
            lastName: responseData[key].LastName,
            email: responseData[key].Email,
            title: responseData[key].Title,
            videoUrl: responseData[key].VideosUrl,
          });
        }
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
              <ShowAllUserUploadedVideos loadedData = {loadedData}/>
            </div>
          </div>
        </>
    );
}

export default UserUploadedVideosPage;