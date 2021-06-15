import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="AppGridContainer">
        <div className="Navbar">
          <div className="NavbarWaffle">
            <i className="material-icons-round NavbarWaffleIcon">menu</i>
          </div>
          <div className="NavbarHome">
            <i className="material-icons-round NavbarHomeIcon">home</i>
          </div>
        </div>
        <div className="AppGridItem"></div>
      </div>
    </div>
  );
}

export default App;
