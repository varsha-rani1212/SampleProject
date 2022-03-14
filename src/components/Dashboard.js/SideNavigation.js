import styles from './SideNavigation.module.css';
import { TiArrowUpOutline } from 'react-icons/ti';
import { TiMediaPlayOutline } from 'react-icons/ti';
import { BiStar } from 'react-icons/bi';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
 
function SideNavigation(){

    const [uploadchange, setUploadChange] = useState(false);
    const [allVideoChange, setAllVideoChange] = useState(false);
    const [favVideoChange, setFavVideoChange] = useState(false);
    const history = useHistory();

    function setUploadHoverHandler(){
        setUploadChange(true);
    }

    function setLeaveUploadHoverHandler(){
        setUploadChange(false);
    }

    function setPlayHoverHandler(){
        setAllVideoChange(true);
    }

    function setLeavePlayHoverHandler(){
        setAllVideoChange(false);
    }

    function setFavHoverHandler(){
        setFavVideoChange(true);
    }

    function setLeaveFavHoverHandler(){
        setFavVideoChange(false);
    }

    function uploadVideoPageHandler(){
        history.push("/MainPage/UploadVideo");
    }

    function showAllVideoPageHandler(){
        history.push("/MainPage/ShowAllVideos");
    }

    function showFavouriteVideoPageHandler(){
        history.push("/MainPage/FavouriteVideos");
    }

    return (
        <nav className={styles.container}>
            <div className={styles.size}>
                <TiArrowUpOutline className={styles.uploadVideos} onMouseEnter={setUploadHoverHandler} onMouseLeave={setLeaveUploadHoverHandler} onClick={uploadVideoPageHandler}/>
                {uploadchange && <p className={styles.iconUploadNames}>Upload Video</p>}
            </div>
            
            <div className={styles.size}>
                < TiMediaPlayOutline className={styles.playVideos} onMouseEnter={setPlayHoverHandler} onMouseLeave={setLeavePlayHoverHandler} onClick={showAllVideoPageHandler}/>
                {allVideoChange && <p className={styles.iconAllVideoNames}>All Videos</p>}
            </div>

            <div  className={styles.size}>
                <BiStar className={styles.favVideos} onMouseEnter={setFavHoverHandler} onMouseLeave={setLeaveFavHoverHandler} onClick={showFavouriteVideoPageHandler}/>
                {favVideoChange && <p className={styles.iconFavVideoNames}>Favourite Videos</p>}
            </div>

        </nav>
    );

}

export default SideNavigation;