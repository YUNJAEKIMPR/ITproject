import React, { useContext } from "react";

import "./App.css";

import AuthContext from "./context/auth-context";
import NavContext from "./context/nav-context";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RecipePage from "./components/recipe-page/RecipePage";
import Login from "./components/login-page/Login";
import Register from "./components/register-page/Register";
import ProfilePage from "./components/profile-page/ProfilePage";
import HomePage from "./components/home-page/HomePage";
import AboutUsPage from "./components/about-us-page/AboutUsPage";

function App() {
  const authContext = useContext(AuthContext);
  const navContext = useContext(NavContext);
  return (
    <div>
      <Header />
      <br />
      <main>
        {authContext.isRegistering && <Register />}
        {!authContext.isRegistering && !authContext.isLoggedIn && <Login />}
        {!authContext.isRegistering &&
          authContext.isLoggedIn &&
          navContext.currentPage === "recipes" && <RecipePage />}
        {!authContext.isRegistering &&
          authContext.isLoggedIn &&
          navContext.currentPage === "profile" && <ProfilePage />}
        {!authContext.isRegistering &&
          authContext.isLoggedIn &&
          navContext.currentPage === "home" && <HomePage />}
        {!authContext.isRegistering &&
          authContext.isLoggedIn &&
          navContext.currentPage === "about_us" && <AboutUsPage />}
      </main>
      {authContext.isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
