import "./Card.css";
function Card() {
  return (
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
        <p>Total vowels</p>
      </div>
    </div>
  );
}
export default Card;
