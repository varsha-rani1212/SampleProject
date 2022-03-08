import videoBoosterImage from '../../images/videoBoost.jpg';
import searchImage from '../../images/search.png';
import styles from '../Dashboard.js/Header.module.css';

function Header(){

    return (
        <header className={styles.container}>
             <div>
                <img src={videoBoosterImage} alt="Error" className={styles.image}/>
             </div>

             <div className={styles.searchBox}>
                 <input type="text" placeholder='Search' className={styles.inputBox} />
                 <img src={searchImage} />
             </div>

             <div className={styles.sidePopUp}>
                 <button>Add User</button>
                 <button>User</button>
             </div>
        </header>
    );

}

export default Header;