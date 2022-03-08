import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../components/SignupForm.module.css";
import { signupActions } from "../store/signup-slice";
import validator from "validator";

let body;
let check = true;

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();
  const normalSignInUserData = useSelector((state) => state.userData.userData);

  useEffect(() => {
    fetch(
      "https://loginproject-28b6c-default-rtdb.firebaseio.com/userData.json",
      { method: "POST", body: JSON.stringify(body) }
    );
  }, [body]);

  function firstNameHandler(event) {
    setFirstName(event.target.value.trim());
    dispatch(signupActions.setFirstName(event.target.value.trim()));
  }

  function lastNameHandler(event) {
    setLastName(event.target.value.trim());
    dispatch(signupActions.setLastName(event.target.value.trim()));
  }

  function dateHandler(event) {
    setDate(event.target.value);
    dispatch(signupActions.setDate(event.target.value));
  }

  function emailHandler(event) {
    setEmail(event.target.value.trim());
    dispatch(signupActions.setEmail(event.target.value.trim()));
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
    dispatch(signupActions.setPassword(event.target.value));
  }

  function validationFirstNameCheckHandler(event) {
    if (!validator.isAlpha(event.target.value)) {
      setFirstNameValid(false);
    } else {
      setFirstNameValid(true);
    }
  }

  function validationLastNameCheckHandler(event) {
    if (!validator.isAlpha(event.target.value)) {
      setLastNameValid(false);
    } else {
      setLastNameValid(true);
    }
  }

  function validationEmailCheckHandler(event) {
    if (!validator.isEmail(event.target.value)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }

  function validationPasswordCheckHandler(event) {
    if (event.target.value.length < 8) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    if (!validator.isAlpha(firstName) || !validator.isAlpha(lastName) || date === "" || !validator.isEmail(email) || password.length < 8) {
      check = false;
      alert("Please enter your data/ Please correct your input Credential!");
    } 
    
    if (true) {
      for (let i = 0; i < normalSignInUserData.length; i++) {
        if (email === normalSignInUserData[i].Email) {
          check=false;
          alert("Account already exist");
          break;
        }
      }
    } 
    else {
      check = true;
    }

    if (check === true) {
      body = {
        id: email,
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        dob: date,
        password: password,
      };
    }

    if (check === true) {
      setFirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setPassword("");

      setFirstNameValid(true);
      setLastNameValid(true);
      setEmailValid(true);
      setPasswordValid(true);
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <div>
          <h2>Sign up with:</h2>
        </div>

        <div className={styles.formgroup}>
          <label>First Name</label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={firstNameHandler}
            onBlur={validationFirstNameCheckHandler}
          />
          {!firstNameValid && (
            <p className={styles.errorText}>
              FirstName should contain only alphabet
            </p>
          )}
        </div>

        <div className={styles.formgroup}>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={lastNameHandler}
            onBlur={validationLastNameCheckHandler}
          />
          {!lastNameValid && (
            <p className={styles.errorText}>
              LastName should contain only alphabet
            </p>
          )}
        </div>

        <div className={styles.formgroup}>
          <label>Date of Birth</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={dateHandler}
            className={styles.formdate}
          />
        </div>

        <div className={styles.formgroup}>
          <label>Email Id</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={emailHandler}
            onBlur={validationEmailCheckHandler}
          />
          {!emailValid && (
            <p className={styles.errorText}>
              You have entered an invalid email address!
            </p>
          )}
        </div>

        <div className={styles.formgroup}>
          <label>Password</label>
          <br />
          <input
            type={showPassword === true ? "text" : "password"}
            value={password}
            onChange={passwordHandler}
            onBlur={validationPasswordCheckHandler}
          />
          {!passwordValid && (
            <p className={styles.errorText}>
              Password must be at least 8 characters long
            </p>
          )}
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
          <button onClick={onSubmit}>Sign Up</button>
        </div>

        <div className={styles.changepage}>
          <label>
            Already have an account?<Link to="/SignIn">Sign In</Link> here
          </label>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
