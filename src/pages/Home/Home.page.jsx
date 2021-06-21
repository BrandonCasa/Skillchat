import React from "react";
import "./Home.page.scss";
import NotificationComponent from "../../components/notification/Notification.component";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="maincontent">
          <div className="notificationbox">
            <div className="title">Notifications</div>
            <hr class="solidborder" />
            <div className="maincontent">
              <ul>
                <li>
                  <NotificationComponent />
                </li>
                <hr class="solidborder border-inset border-darker-2" />
                <li>
                  <NotificationComponent />
                </li>
              </ul>
            </div>
          </div>
          <div className="friendsbox">
            <div className="title">Friend Activity</div>
            <hr class="solidborder" />
            <div className="maincontent"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
