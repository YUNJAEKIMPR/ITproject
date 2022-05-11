import "./Header.css";
import JoinUs from "./JoinUs";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <div className="Gname">
        <h1 className="d-lg-block">Cook For You</h1>
      </div>
      <JoinUs />
      <br />
      <Navbar />
    </div>
  );
}

export default Header;
