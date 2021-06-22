import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="maincontent">
        <Switch>
          <Route path="/" exact>
            Welcome to skillchat, please login!
          </Route>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/social">Social Page</PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
