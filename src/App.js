import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import MainPage from "./components/Dashboard.js/MainPage";
import UploadVideo from "./components/Dashboard-SideNav/UploadVideo";
import UploadUrl from "./components/Dashboard-SideNav/UploadUrl";

function App() {
  return (
    <div>
        <Route path="/" exact>
          <Redirect to="/SignIn" />
        </Route>

        <Route path="/SignIn">
          <Login />
        </Route>

        <Route path="/SignUp">
          <Signup />
        </Route>

        <Route path="/MainPage">
          <MainPage />
        </Route>

        <Route path="/MainPage/UploadVideo">
          <UploadVideo />
        </Route>
    </div>
  );
}

export default App;
