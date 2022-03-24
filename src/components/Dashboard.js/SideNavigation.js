import styles from "./SideNavigation.module.css";
import { TiArrowUpOutline } from "react-icons/ti";
import { TiMediaPlayOutline } from "react-icons/ti";
import { IoIosPaper } from "react-icons/io";
import { SiUploaded } from "react-icons/si";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showHideIconActions } from "../../store/showHideIcon-slice";

function SideNavigation() {
  const [uploadchange, setUploadChange] = useState(false);
  const [allVideoChange, setAllVideoChange] = useState(false);
  const [favVideoChange, setFavVideoChange] = useState(false);
  const [mainPageCahnge, setMainPageChange] = useState(false);
  const [uploadedVideoChange, setUploadedVideoChange] = useState(false);
  const mainPageIcon = useSelector((state) => state.showHideIcon.mainPage);
  const uploadVideoIcon = useSelector(
    (state) => state.showHideIcon.uploadVideo
  );
  const allVideosIcon = useSelector((state) => state.showHideIcon.allVideos);
  const uploadedVideosIcon = useSelector(
    (state) => state.showHideIcon.uploadedVideos
  );
  const favouriteVideosIcon = useSelector(
    (state) => state.showHideIcon.favouriteVideos
  );
  const history = useHistory();
  const dispatch = useDispatch();

  function setUploadHoverHandler() {
    setUploadChange(true);
  }

  function setLeaveUploadHoverHandler() {
    setUploadChange(false);
  }

  function setPlayHoverHandler() {
    setAllVideoChange(true);
  }

  function setLeavePlayHoverHandler() {
    setAllVideoChange(false);
  }

  function setFavHoverHandler() {
    setFavVideoChange(true);
  }

  function setLeaveFavHoverHandler() {
    setFavVideoChange(false);
  }

  function setMainPageHoverHandler() {
    setMainPageChange(true);
  }

  function setLeaveMainPageHoverHandler() {
    setMainPageChange(false);
  }

  function setUserUploadedHoverHandler() {
    setUploadedVideoChange(true);
  }

  function setLeaveUserUploadedHoverHandler() {
    setUploadedVideoChange(false);
  }

  function uploadVideoPageHandler() {
    dispatch(showHideIconActions.setUploadVideos());
    history.push("/MainPage/UploadVideo");
  }

  function showAllVideoPageHandler() {
    dispatch(showHideIconActions.setAllVideos());
    history.push("/MainPage/ShowAllVideos");
  }

  function showFavouriteVideoPageHandler() {
    dispatch(showHideIconActions.setFavouriteVideos());
    history.push("/MainPage/FavouriteVideos");
  }

  function MainPageHandler() {
    dispatch(showHideIconActions.setMainPage());
    history.push("/MainPage");
  }

  function showUserUploadedVideoPageHandler() {
    dispatch(showHideIconActions.setUploadedVideos());
    history.push("/MainPage/UserUploadVideo");
  }

  return (
    <nav className={styles.container}>
      <div className={styles.mainPageDisplay}>
        <IoIosPaper
          className={`${mainPageIcon && styles.showOnClick} && ${!mainPageIcon && styles.mainPage}`}
          onMouseEnter={setMainPageHoverHandler}
          onMouseLeave={setLeaveMainPageHoverHandler}
          onClick={MainPageHandler}
        />
        {mainPageCahnge && <p className={styles.iconMainPage}>Main Page</p>}
      </div>

      <div className={styles.size}>
        <TiArrowUpOutline
          className={`${uploadVideoIcon && styles.showOnClick} && ${!uploadVideoIcon && styles.uploadVideos}`} 
          onMouseEnter={setUploadHoverHandler}
          onMouseLeave={setLeaveUploadHoverHandler}
          onClick={uploadVideoPageHandler}
        />
        {uploadchange && <p className={styles.iconUploadNames}>Upload Video</p>}
      </div>

      <div className={styles.size}>
        <TiMediaPlayOutline
          className={`${allVideosIcon && styles.showOnClickAllVideos} && ${!allVideosIcon && styles.playVideos}`} 
          onMouseEnter={setPlayHoverHandler}
          onMouseLeave={setLeavePlayHoverHandler}
          onClick={showAllVideoPageHandler}
        />
        {allVideoChange && (
          <p className={styles.iconAllVideoNames}>All Videos</p>
        )}
      </div>

      <div className={styles.size}>
        <SiUploaded
          className={`${uploadedVideosIcon && styles.showOnClickFavVideos} && ${!uploadedVideosIcon && styles.favVideos}`}
          onMouseEnter={setUserUploadedHoverHandler}
          onMouseLeave={setLeaveUserUploadedHoverHandler}
          onClick={showUserUploadedVideoPageHandler}
        />
        {uploadedVideoChange && (
          <p className={styles.iconFavVideoNames}>Uploaded Videos</p>
        )}
      </div>

      <div className={styles.size}>
        <BiStar
          className={`${favouriteVideosIcon && styles.showOnClickFavVideos} && ${!favouriteVideosIcon && styles.favVideos}`}
          onMouseEnter={setFavHoverHandler}
          onMouseLeave={setLeaveFavHoverHandler}
          onClick={showFavouriteVideoPageHandler}
        />
        {favVideoChange && (
          <p className={styles.iconFavVideoNames}>Favourite Videos</p>
        )}
      </div>
    </nav>
  );
}

export default SideNavigation;
