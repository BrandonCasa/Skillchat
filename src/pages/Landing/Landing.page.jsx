import React from "react";
import "./Landing.page.scss";
import vid from "./background.webm";
import steam from "./background.webm";

function LandingPage() {
  return (
    <div className="Landing">
      <div className="maincontent">
        <div className="videocont">
          <video src={vid} width="100%" height="100%" type="video/x-webm" autoPlay muted loop></video>
          <video src={vid} width="100%" height="100%" type="video/x-webm" autoPlay muted loop></video>
        </div>
        <div className="information"></div>
      </div>
    </div>
  );
}

export default LandingPage;
