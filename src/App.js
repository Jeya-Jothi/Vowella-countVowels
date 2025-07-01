import "./App.css";
import Header from "./component/Header/Header";
import Card from "./component/Card/Card";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <div className="container">
          <Card />
        </div>
      </div>
      <About />
      <Contact />
    </div>
  );
}

export default App;
