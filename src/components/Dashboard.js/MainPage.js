import Header from "./Header";
import SideNavigation from "./SideNavigation";
import styles from './MainPage.module.css';

function MainPage() {
 
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainArea}>
      <SideNavigation />
      </div>
    </div>
  );
}

export default MainPage;
