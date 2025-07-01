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
        <div className="head-div">
          <p>About</p>
        </div>
        <div className="content-div">
          <div className="card-one">
            <p>
              Vowella is a minimalist web application that allows users to count
              the total number of vowels in any given text input. Built using
              React.js, the project emphasizes clean UI design and real-time
              interaction. The app helps users visualize and understand vowel
              usage in text, making it useful for language learners, writers, or
              anyone curious about the structure of their writing.
            </p>
          </div>
          <div className="card-two">
            <p>Intuitive and elegant user interface</p>
            <p>Accurate vowel detection (both uppercase and lowercase)</p>
            <p>Responsive design compatible with all screen sizes</p>
            <p>Lightweight and fast performance</p>
          </div>
          <div className="card-three">
            <p>
              This project showcases fundamental React concepts such as state
              management, event handling, and conditional rendering, wrapped in
              a modern, glassmorphic design aesthetic.
            </p>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="head-div">
          <p>Contact</p>
        </div>
        <div className="contact-content">
          <a
            href="mailto:jeyajothi108@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/email logo.svg" alt="email logo" />
            <p>Email</p>
          </a>
          <a
            href="https://github.com/Jeya-Jothi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/github logo.svg" alt="github logo" />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jeya-jothi-841277211"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/linkedin logo.svg" alt="linkedin logo" />
            <p>Linkedin</p>
          </a>
          <a
            href="https://jothi-portfolio-9utu.onrender.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/logo jj.svg" alt="portfolio logo" />
            <p>Portfolio</p>
          </a>
        </div>
        <div className="copyright-div">
          <p>
            Copyright © {new Date().getFullYear()} | Jeya Jothi | All right
            reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
