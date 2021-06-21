import React from "react";
import "./App.scss";
import Navbar from "../../components/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="maincontent">
          <div className="friendactivity"></div>
          <div className="notificationhistory"></div>
        </div>
      </div>
    );
  }
}

export default App;
