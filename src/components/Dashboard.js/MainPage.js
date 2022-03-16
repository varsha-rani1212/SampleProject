import Header from "./Header";
import SideNavigation from "./SideNavigation";
import styles from "./MainPage.module.css";
import MainScreen from "../Dashboard-mainSceenView/MainScreen";
import UploadedMainScreen from "../Dashboard-mainSceenView/UploadedMainScreen";
import FavouriteMainScreen from "../Dashboard-mainSceenView/FavouriteMainScreen";

function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <SideNavigation />
          <div>
            <UploadedMainScreen />
            <MainScreen />
            <FavouriteMainScreen />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
