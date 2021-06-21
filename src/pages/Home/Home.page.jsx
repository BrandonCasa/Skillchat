import React from "react";
import "./Home.page.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="maincontent">
          <div className="notificationbox">
            <div className="title">Notifications</div>
            <hr class="solidborder" />
          </div>
          <div className="friendsbox">
            <div className="title">Friend Activity</div>
            <div>
              <hr class="solidborder" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
