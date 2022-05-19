import React, { useContext } from "react";
import NavContext from "../../context/nav-context";
import "./Navbar.css";

function Navbar() {
  const navContext = useContext(NavContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#0"
                onClick={navContext.onGoToGrocery}
              >
                Grocery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#0"
                onClick={navContext.onGoToRecipes}
              >
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#0"
                onClick={navContext.onGoToAboutUs}
              >
                About Us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              id="search"
              className="form-control me-2"
              type="text"
              placeholder="Search..."
            />
            <div className="submit">
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
