import videoBoosterImage from '../../images/videoBoost.jpg';
import searchImage from '../../images/search.png';
import styles from '../Dashboard.js/Header.module.css';
import { useSelector } from 'react-redux';

function Header(){

    const googleData = useSelector((state) => state.userData.googleData);

    return (
        <header className={styles.container}>
             <div>
                <img src={videoBoosterImage} alt="Error" className={styles.image}/>
             </div>

             <div className={styles.searchBox}>
                 <input type="text" placeholder='Search' className={styles.inputBox} />
                 <img src={searchImage} />
             </div>

             <div className={styles.dropdown}>
                 <button className={styles.dropbtn}>User</button>
                 <div className={styles.dropdownContent}>
                     <p>Name:&nbsp;{googleData.givenName} &nbsp; {googleData.familyName}</p>
                     <p></p>
                 </div>
             </div>
        </header>
    );

}

export default Header;