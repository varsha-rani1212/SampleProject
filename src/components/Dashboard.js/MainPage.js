import Header from "./Header";
import SideNavigation from "./SideNavigation";
import styles from "./MainPage.module.css";
import MainScreen from "../Dashboard-mainSceenView/MainScreen";

function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <SideNavigation />
          <div>
            <MainScreen />
            <MainScreen />
            <MainScreen />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
