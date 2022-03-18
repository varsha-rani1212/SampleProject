import videoBoosterImage from "../../images/videoBoost.jpg";
import searchImage from "../../images/search.png";
import styles from "../Dashboard.js/Header.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header() {
  const googleData = useSelector((state) => state.userData.googleData);
  const signInUserInfo = useSelector((state) => state.userData.userInfo);
  const flagCheckSignInMethod = useSelector((state) => state.userData.flag);
  const history = useHistory();

  function logoutHandler(){
    history.push("/SignIn");
  }

  function imageClickHandler(){
    history.push("/MainPage");
  }

  return (
    <header className={styles.container}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>User</button>
        <div className={styles.dropdownContent}>
          <p className={styles.userName}>
            Name:&nbsp;
            {flagCheckSignInMethod === 0
              ? `${signInUserInfo.firstName}`
              : `${googleData.givenName}`}
            &nbsp;{" "}
            {flagCheckSignInMethod === 0
              ? `${signInUserInfo.lastName}`
              : `${googleData.familyName}`}
          </p>
          <p className={styles.userEmail}>Email:&nbsp;  {flagCheckSignInMethod === 0
              ? `${signInUserInfo.email}`
              : `${googleData.email}`}</p>
          <p>
            <button className={styles.logout} onClick={logoutHandler}>Logout</button>
          </p>
          <hr />
          <p className={styles.websiteName}>
            VideoBoost,2022-2023,All rights reserved
          </p>
        </div>
      </div>

      {/* <div className={styles.searchBox}>
        <input type="text" placeholder="Search" className={styles.inputBox} />
        <img src={searchImage} />
      </div> */}

      <div>
        <img src={videoBoosterImage} alt="Error" className={styles.image} onClick={imageClickHandler}/>
      </div>
    </header>
  );
}

export default Header;
