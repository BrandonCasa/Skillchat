import React from "react";
import "./Notification.component.scss";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function NotificationComponent() {
  // Auth state
  const auth = useSelector((state) => state.firebase.auth);

  // Get a user's doc
  /*
  useFirestoreConnect(() => [{ collection: "users", doc: auth.uid }]);
  const myuser = useSelector(({ firestore: { data } }) => data.users && data.users[auth.uid]);
  */

  const profile = useSelector((state) => state.firebase.profile);

  let my = "ERROR";
  if (isLoaded(profile) && !isEmpty(profile)) {
    return (
      <div className="notification">
        <img className="avatar" src={profile.avatarUrl} alt="Err" />
        <div className="content">
          <div className="username">{profile.displayName}</div>
          <div className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada ex non odio facilisis ultrices. Praesent nec placerat ante. Morbi viverra lectus non velit convallis suscipit.
            Curabitur sodales quis purus id hendrerit. Sed nec dictum enim. Donec id dapibus odio. Nulla bibendum tortor odio, eu sagittis nibh pretium eget. Pellentesque tristique fermentum nulla, in
            ullamcorper libero finibus non. Nunc rutrum pellentesque augue eget facilisis. Fusce accumsan tortor fermentum, aliquam magna id, mattis neque. Integer sapien purus, aliquam eget tortor
            congue, tristique pellentesque arcu. Sed iaculis venenatis ligula sit amet cursus. Sed ut quam et erat fermentum tristique vitae non purus. Donec pulvinar nisi blandit mi aliquam, et
            tincidunt felis tempor. Nullam elit justo, accumsan eget convallis non, sollicitudin eget felis. Vestibulum rutrum, lacus feugiat iaculis interdum, risus ex ornare elit, porttitor lobortis
            dui ante nec nisi.
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default NotificationComponent;
