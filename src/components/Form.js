import { Link } from "react-router-dom";
import styles from "../components/Form.module.css";
import { GoogleLogin } from "react-google-login";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDataActions } from "../store/userData-slice";


function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [flag, setFlag] = useState(false);
  const [loadedUserData, setLodedUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const clientId =
    "961149418252-d8iscbhdha19so7l29t0mqiai4trtf9v.apps.googleusercontent.com";

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        "https://loginproject-28b6c-default-rtdb.firebaseio.com/userData.json"
      );
      const responseData = await response.json();

      const tempUserData = [];

      for (const key in responseData) {
        tempUserData.push({
          id: responseData[key].id,
          Email: responseData[key].Email,
          password: responseData[key].password,
        });
      }
      dispatch(userDataActions.setUserData(tempUserData));
      setLodedUserData(tempUserData);
    };

    fetchUserData();
  }, []);

  function userEmailHandler(event) {
    setEmail(event.target.value.trim());
  }

  function userPasswordHandler(event) {
    setPassword(event.target.value.trim());
  }

  function onGoogleLoginSuccess(event) {
    //console.log("Form: ",event.profileObj);
    dispatch(userDataActions.setGoogleData(event.profileObj));
    history.push("/MainPage");
  }

  useEffect(() => {
    if (flag) {
      console.log(flag);
      history.push("/MainPage");
    }
  }, [flag]);

  function onSubmit(event) {
    event.preventDefault();
    console.log("loadedUserData", loadedUserData);
    for (let i = 0; i < loadedUserData.length; i++) {
      if (
        email === loadedUserData[i].Email &&
        password === loadedUserData[i].password
      ) {
        setFlag(true);
        break;
      }
    }
    setEmail("");
    setPassword("");
  }

  function onGoogleFailureSuccess(event) {
    console.log("Login Failed:", event);
  }

  return (
    <div className={styles.container}>
      <form>
        <div>
          <h2>Sign in with:</h2>
        </div>

        <div className={styles.formgroup}>
          <label>Email Id</label>
          <br />
          <input type="email" value={email} onChange={userEmailHandler} />
        </div>

        <div className={styles.formgroup}>
          <label>Password</label>
          <br />
          <input
            type={showPassword === true ? "text" : "password"}
            value={password}
            onChange={userPasswordHandler}
          />
        </div>

        <div className={styles.showPassword}>
          <input
            type="checkbox"
            onChange={() => {
              showPassword === false
                ? setShowPassword(true)
                : setShowPassword(false);
            }}
          />
          &nbsp;
          <label>Show Password</label>
        </div>
        <br />

        <div className={styles.formgroup}>
          <button onClick={onSubmit}>Sign In</button>
        </div>

        <div className={styles.changepage}>
          <label>
            Don't have an account?<Link to="/SignUp">Sign Up</Link> here{" "}
          </label>
        </div>

        <div className={styles.otherSignup}>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onGoogleLoginSuccess}
            onFailure={onGoogleFailureSuccess}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
