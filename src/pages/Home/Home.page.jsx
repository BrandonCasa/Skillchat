import React from "react";
import "./Home.page.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="maincontent">
          <div className="notificationbox">notifications</div>
          <div className="friendsbox">friends</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
