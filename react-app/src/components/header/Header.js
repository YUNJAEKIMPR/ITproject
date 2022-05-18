import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import "./Header.css";
import JoinUs from "./JoinUs";
import Navbar from "./Navbar";
import Profile from "./Profile";

function Header() {
  const context = useContext(AuthContext);
  return (
    <div className="header">
      <div className="Gname">
        <h1 className="d-lg-block" onClick={context.onGoToRecipes}>
          Cook For You
        </h1>
      </div>
      {/* {!context.isLoggedIn && <JoinUs />} */}
      {context.isLoggedIn && <Profile />}
      {context.isLoggedIn && <Navbar />}
    </div>
  );
}

export default Header;
