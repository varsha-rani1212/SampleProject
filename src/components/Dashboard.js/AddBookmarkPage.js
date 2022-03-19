import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import AddBookmark from '../Dashboard-SideNav/AddBookmark';

function AddBookmarkPage(){
    return (
        <>
          <Header />
          <div className={styles.container}>
            <div className={styles.mainArea}>
              <SideNavigation />
              <AddBookmark />
            </div>
          </div>
        </>
      );
}

export default AddBookmarkPage;