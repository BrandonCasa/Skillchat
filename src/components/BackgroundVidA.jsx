import React from "react";
import YouTube from "react-youtube";

class BackgroundVidA extends React.Component {
  render() {
    const opts = {
      height: "2160",
      width: "3840",
      playerVars: {
        autoplay: 1, // Auto-play the video on load

        autohide: 1,

        disablekb: 1,

        controls: 0, // Hide pause/play buttons in player

        showinfo: 0, // Hide the video title

        modestbranding: 1, // Hide the Youtube Logo

        loop: 1, // Run the video in a loop

        fs: 0, // Hide the full screen button

        rel: 0,

        enablejsapi: 1,
      },
    };

    return <YouTube videoId="4RsSQloDh34" opts={opts} onReady={this.onReady} onStateChange={this.onStateChange} />;
  }
  onReady(e) {
    e.target.mute();

    e.target.setPlaybackQuality("hd1080");
  }
  onStateChange(e) {
    if (e && e.data === 1) {
      var videoHolder = document.getElementById("home-banner-box");

      if (videoHolder && videoHolder.id) {
        videoHolder.classList.remove("loading");
      }
    } else if (e && e.data === 0) {
      e.target.playVideo();
    }
  }
}

export default BackgroundVidA;
