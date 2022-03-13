import styles from "./MainScreen.module.css";
import Carousel from "react-elastic-carousel";
import ReactPlayer from 'react-player';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function MainScreen() {
  return (
    <div className={styles.UploadedVideoSlider}>
        <br />
        <h2>&nbsp;Uploaded Videos</h2>
      <Carousel breakPoints={breakPoints}>
        <div className={styles.item}>
        <ReactPlayer controls url='https://firebasestorage.googleapis.com/v0/b/loginproject-28b6c.appspot.com/o/files%2FWhatsApp%20Video%202022-03-07%20at%205.42.45%20PM.mp4?alt=media&token=3f9c98b2-f31d-4727-8dc7-567f9cf4b340' className={styles.reactPlayer} />
        </div>
        <div className={styles.item}>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={styles.reactPlayer} />
        </div>
        <div className={styles.item}>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={styles.reactPlayer} />
        </div>
        <div className={styles.item}>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={styles.reactPlayer} />
        </div>
        <div className={styles.item}>
        <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={styles.reactPlayer} />
        </div>
      </Carousel>
    </div>
  );
}

export default MainScreen;
