import styles from "./MainScreen.module.css";
import Carousel from "react-elastic-carousel";

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
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div className={styles.item}>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div className={styles.item}>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div className={styles.item}>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div className={styles.item}>
           <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
      </Carousel>
    </div>
  );
}

export default MainScreen;
