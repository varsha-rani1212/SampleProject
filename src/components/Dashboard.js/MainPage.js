import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';

function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <SideNavigation />
        </div>
      </div>
    </>
  );
}

export default MainPage;
