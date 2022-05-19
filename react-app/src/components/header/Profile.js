import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";
import NavContext from "../../context/nav-context";

import moon from "../../images/moon.png";
import avatar from "../../images/avatar.jpg";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const navContext = useContext(NavContext);

  return (
    <div className="Right">
      <div className="moon">
        <img
          src={moon}
          id="icon"
          style={{ width: "40px", height: "40px" }}
          alt=""
        />
      </div>
      <div className="avatar">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-circle img-fluid  border border-dark"
          style={{ width: "40px", height: "40px" }}
          onClick={navContext.onGoToProfile}
        />
      </div>
      <button className="logout" onClick={authContext.onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
