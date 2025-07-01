import "./About.css";
function About() {
  return (
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
            management, event handling, and conditional rendering, wrapped in a
            modern, glassmorphic design aesthetic.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
