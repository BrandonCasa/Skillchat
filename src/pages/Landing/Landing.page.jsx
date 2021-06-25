import React from "react";
import "./Landing.page.scss";
import vid from "./background.webm";

function LandingPage() {
  return (
    <div className="Landing">
      <div className="maincontent">
        <div className="video">
          <div className="title"></div>
          <video src={vid} width="100%" height="100%" type="video/x-webm" autoPlay muted loop></video>
          <div className="chevrons"></div>
        </div>
        <div className="information"></div>
      </div>
    </div>
  );
}

export default LandingPage;
