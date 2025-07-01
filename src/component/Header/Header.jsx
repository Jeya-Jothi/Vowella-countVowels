import "./Header.css";
function Header() {
  return (
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
  );
}
export default Header;
