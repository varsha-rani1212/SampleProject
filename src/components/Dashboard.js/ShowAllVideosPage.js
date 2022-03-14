import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import ShowAllVideos from '../Dashboard-SideNav/ShowAllVideos';

function ShowAllVideosPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <SideNavigation />
          <ShowAllVideos />
        </div>
      </div>
    </>
  );
}

export default ShowAllVideosPage;