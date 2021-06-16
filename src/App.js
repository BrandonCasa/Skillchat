import React from "react";
import "./App.scss";
import ServerIcon from "./components/ServerIcon";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="AppGridContainer">
          <div className="Serverbar">
            <div className="Servers">
              <ServerIcon />
              <ServerIcon />
              <ServerIcon />
            </div>
          </div>
          <div className="Navbar">
            <div className="NavbarHome NavbarCircleBorder noselect">
              <i className="material-icons-round NavbarIcon noselect">home</i>
            </div>
            <div className="NavbarAccountSettings noselect">
              <i className="material-icons-round NavbarIcon noselect">manage_accounts</i>
            </div>
            <div className="NavbarLightMode noselect">
              <i className="material-icons-round NavbarIcon noselect">light_mode</i>
            </div>
            <div className="NavbarSettings noselect">
              <i className="material-icons-round NavbarIcon noselect">settings</i>
            </div>
          </div>
          <div className="AppGridItem"></div>
        </div>
      </div>
    );
  }
}

export default App;
