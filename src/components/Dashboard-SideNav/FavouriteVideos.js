import styles from "./FavouriteVideos.module.css";
import { useState, useEffect } from "react";
import DisplayFavData from "./DisplayFavData";
import { useSelector } from "react-redux";

function FavouriteVideos() {
  const [loadedFavData, setLoadedFavData] = useState([]);
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
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
    <div className={styles.containerDisplay}>
      {loadedFavData.length > 0 ? (
        loadedFavData.map((data) => {
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
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default FavouriteVideos;
