import SignUpImage from "../images/sign-up.png";
import SignupForm from "./SignupForm";
import styles from "../components/Signup.module.css";

function Signup() {

  return (
    <div className={styles.container}>
      <img src={SignUpImage} alt="Error" className={styles.image} />
      <SignupForm onSetFlag />
    </div>
  );
}

export default Signup;
