import React from "react";
import "./App.scss";
import { ReactComponent as SiteLogo } from "./logo.svg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="menu">
            <div className="logo">
              <div className="navbutton">
                <SiteLogo />
              </div>
            </div>
            <ul>
              <li>
                <div className="navbutton">Home</div>
              </li>
              <li>
                <div className="navbutton">Social</div>
              </li>
              <li>
                <div className="navbutton">Settings</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
