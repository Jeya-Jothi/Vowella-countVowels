import { useState } from "react";
import "./Card.css";
function Card() {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countVowels = () => {
    const textArray = text.split("");
    console.log(textArray);
    const newText = textArray.filter((t) => {
      return vowels.includes(t);
    });
    console.log(newText);

    setCount(newText.length);
  };
  return (
    <div className="card">
      <div className="card-head">
        <p>Count Vowels</p>
      </div>
      <div className="card-input">
        <textarea
          placeholder="Enter your text here"
          onChange={handleChange}
          spellCheck="false"
        />
      </div>
      <div className="card-btn">
        <button onClick={countVowels}>Count</button>
      </div>
      <div className="total-div">
        <p>Total vowels: {count}</p>
      </div>
    </div>
  );
}
export default Card;
