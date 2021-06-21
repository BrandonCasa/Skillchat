import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="maincontent">
          <BrowserRouter>
            <Switch>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
