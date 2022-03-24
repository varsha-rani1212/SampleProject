import Header from './Header';
import SideNavigation from './SideNavigation';
import styles from './MainPage.module.css';
import UploadVideo from '../Dashboard-SideNav/UploadVideo';
import { useDispatch } from "react-redux";
import { headingOfPageActions }  from "../../store/headingOfPage-slice";

function UploadVideoPage() {
  const dispatch = useDispatch();
  dispatch(headingOfPageActions.setHeading("Upload Video"));
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