import React, { useState } from "react";
import "./Landing.page.scss";
import vid from "./background.webm";
import steam from "./steam.webm";

function LandingPage() {
  const [vidVis, setVidVis] = useState(false);

  const changeVal = () => {
    setVidVis(true);
    document.getElementById("steamvid").play();
  };
  setTimeout(changeVal, 500);

  return (
    <div className="Landing">
      <div className="maincontent">
        <div className="videocont">
          <video src={vid} width="100%" height="100%" type="video/x-webm" autoPlay muted loop style={vidVis ? {} : { display: "none" }}></video>
          <video id="steamvid" src={steam} width="100%" height="100%" muted></video>
          <div className="overlay">
            <div className="title">Please login to enjoy social features, more information below.</div>
          </div>
        </div>
        <div className="information">xd no info</div>
      </div>
    </div>
  );
}

export default LandingPage;
