import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import PrivateRoute from "./components/PrivateRoute";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function App() {
  const firebase = useFirebase();
  const history = useHistory();

  const auth = useSelector((state) => state.firebase.auth);

  function BaseRoute() {
    if (isLoaded(auth) && !isEmpty(auth)) {
      return <HomePage />;
    } else {
      return "Welcome to skillchat, please login!";
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="maincontent">
        <Switch>
          <Route path="/" exact>
            <BaseRoute />
          </Route>
          <PrivateRoute path="/social">Social Page</PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
