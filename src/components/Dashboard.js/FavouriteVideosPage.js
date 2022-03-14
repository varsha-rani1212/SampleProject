import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import FavouriteVideos from '../Dashboard-SideNav/FavouriteVideos';

function FavouriteVideosPage(){
    return (
        <>
          <Header />
          <div className={styles.container}>
            <div className={styles.mainArea}>
              <SideNavigation />
              <FavouriteVideos />
            </div>
          </div>
        </>
      );
}

export default FavouriteVideosPage;