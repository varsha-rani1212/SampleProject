import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import FavouriteVideos from '../Dashboard-SideNav/FavouriteVideos';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { headingOfPageActions }  from "../../store/headingOfPage-slice";

function FavouriteVideosPage(){
  const [loadedFavData, setLoadedFavData] = useState([]);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
  const dispatch = useDispatch();
  dispatch(headingOfPageActions.setHeading("Favourite Videos"));
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

      for (const key in responseData) {
        if (responseData[key].UserEmail === email) {
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
      }
      setLoadedFavData(tempData);
    };
    fetchUserFavouriteVideoData();
  }, []);

    return (
        <>
          <Header />
          <div className={`${loadedFavData.length < 6 && styles.containerReset} ${loadedFavData.length > 6 && styles.container}`}>
            <div className={styles.mainArea}>
              <SideNavigation />
              <FavouriteVideos loadedFavData = {loadedFavData}/>
            </div>
          </div>
        </>
      );
}

export default FavouriteVideosPage;