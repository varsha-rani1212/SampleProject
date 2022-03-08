import SignInImage from '../images/sign-in.jpeg';
import styles from '../components/Login.module.css';
import Form from './Form';

function Login(){

    return (
        <div className={styles.container}>
           <Form /> 
           <img src={SignInImage} alt="Error"  className={styles.image}/>
        </div>
    );

}

export default Login;