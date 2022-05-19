import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import NavContext from "../../context/nav-context";

import "./Header.css";
import Navbar from "./Navbar";
import Profile from "./Profile";

function Header() {
  const authContext = useContext(AuthContext);
  const navContext = useContext(NavContext);

  return (
    <div className="header">
      <div className="Gname">
        <h1 className="d-lg-block" onClick={navContext.onGoToHome}>
          Cook For You
        </h1>
      </div>
      {authContext.isLoggedIn && <Profile />}
      {authContext.isLoggedIn && <Navbar />}
    </div>
  );
}

export default Header;
