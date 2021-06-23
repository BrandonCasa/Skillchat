import React from "react";
import "./Navbar.scss";
import { ReactComponent as SiteLogo } from "../../logo.svg";
import { useHistory } from "react-router-dom";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

function Navbar() {
  const firebase = useFirebase();
  const history = useHistory();

  function loginGoogle() {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/");
      });
  }

  function logout() {
    firebase.logout().then(() => {
      history.push("/");
    });
  }

  function navigate(href) {
    history.push(href);
  }

  const auth = useSelector((state) => state.firebase.auth);

  function LoginLogoutButton() {
    if (isLoaded(auth) && !isEmpty(auth)) {
      return (
        <li>
          <div className="navbutton logoutbtn" onClick={() => logout()}>
            Logout
          </div>
        </li>
      );
    } else {
      return (
        <li>
          <div className="navbutton logoutbtn" onClick={() => loginGoogle()}>
            Login
          </div>
        </li>
      );
    }
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
            <div className="navbutton" onClick={() => navigate("/settings")}>
              Settings
            </div>
          </li>
          <LoginLogoutButton />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
