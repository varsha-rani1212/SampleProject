import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import UploadVideo from '../Dashboard-SideNav/UploadVideo';

function UploadVideoPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <SideNavigation />
           <UploadVideo />
        </div>
      </div>
    </>
  );
}

export default UploadVideoPage;