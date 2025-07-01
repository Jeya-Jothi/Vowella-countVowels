import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="heading">
          <div className="left-group">
            <img
              src="images/count vowels logo.svg"
              alt="logo"
              className="logo-img"
            />
            <p className="head-txt">Vowella</p>
          </div>
          <div className="nav-div">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-head">
              <p>Count Vowels</p>
            </div>
            <div className="card-input">
              <textarea placeholder="Enter your text here" />
            </div>
            <div className="card-btn">
              <button>Count</button>
            </div>
            <div className="total-div">
              <p>Total vowels:</p>
            </div>
          </div>
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
