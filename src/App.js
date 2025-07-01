import "./App.css";
import Header from "./component/Header/Header";
import Card from "./component/Card/Card";

function App() {
  return (
    <div className="App">
      <div className="main">
        {/* Header */}
        <Header />
        <div className="container">
          {/* Card */}
          <Card />
        </div>
      </div>
      <div className="about" id="about">
        <p>About</p>
      </div>
      <div className="contact" id="contact">
        <p>Contact</p>
      </div>
    </div>
  );
}

export default App;
