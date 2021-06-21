import React from "react";
import "./Navbar.scss";
import { ReactComponent as SiteLogo } from "../../logo.svg";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  function navigate(href) {
    history.push(href);
  }

  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <div className="navbutton">
            <SiteLogo />
          </div>
        </div>
        <ul>
          <li>
            <div className="navbutton" onClick={() => navigate("/")}>
              Home
            </div>
          </li>
          <li>
            <div className="navbutton" onClick={() => navigate("/social")}>
              Social
            </div>
          </li>
          <li>
            <div className="navbutton">Settings</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
