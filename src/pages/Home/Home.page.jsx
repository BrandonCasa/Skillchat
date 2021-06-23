import React from "react";
import "./Home.page.scss";
import NotificationComponent from "../../components/notification/Notification.component";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

function HomePage() {
  //const firestore = useFirestore();

  // Auth state
  const auth = useSelector((state) => state.firebase.auth);

  // Get a user's doc
  /*
  useFirestoreConnect(() => [{ collection: "users", doc: auth.uid }]);
  const myuser = useSelector(({ firestore: { data } }) => data.users && data.users[auth.uid]);
  */

  const profile = useSelector((state) => state.firebase.profile);

  let notificationContent = "ERROR";
  if (!isLoaded(profile) || isEmpty(profile)) {
    notificationContent = "Loading...";
  }
  function NotificationBox() {
    if (notificationContent === "ERROR") {
      return (
        <div className="notificationbox">
          <div className="title">Notifications</div>
          <hr className="solidborder" />
          <div className="maincontent">
            <ul>
              <li>
                <NotificationComponent />
              </li>
              <hr className="solidborder border-inset border-darker-2" />
              <li>
                <NotificationComponent />
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="notificationbox">
          <div className="title">Notifications</div>
          <hr className="solidborder" />
          <div className="maincontent">{notificationContent}</div>
        </div>
      );
    }
  }
  /*
  function changeUsername() {
    let users = firestore.collection("users");
    let user = users.doc("3TSl0gBerLQfCfX6Uz6n");
    user.set({ username: "ur mom" });
    return true;
  }
  */

  return (
    <div className="Home">
      <div className="maincontent">
        <NotificationBox />
        <div className="friendsbox">
          <div className="title">Friend Activity</div>
          <hr className="solidborder" />
          <div className="maincontent"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
