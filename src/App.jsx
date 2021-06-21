import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="maincontent">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/social">Social Page</Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
