import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import MainPage from "./components/Dashboard.js/MainPage";
import { Switch } from "react-router-dom";
import UploadVideoPage from "./components/Dashboard.js/UploadVideoPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/SignIn" />
        </Route>

        <Route path="/SignIn">
          <Login />
        </Route>

        <Route path="/SignUp">
          <Signup />
        </Route>

        <Route path="/MainPage" exact>
          <MainPage />
        </Route>

        <Route path="/MainPage/UploadVideo">
          <UploadVideoPage />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
