import React, { useContext } from "react";

import "./App.css";

import AuthContext from "./context/auth-context";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RecipePage from "./components/recipe-page/RecipePage";
import Login from "./components/login-page/Login";
import Register from "./components/register-page/Register";
import ProfilePage from "./components/profile-page/ProfilePage";

function App() {
  const context = useContext(AuthContext);
  return (
    <div>
      <Header />
      <br />
      <main>
        {context.isRegistering && <Register />}
        {!context.isRegistering && !context.isLoggedIn && <Login />}
        {!context.isRegistering &&
          context.isLoggedIn &&
          context.currentPage === "recipes" && <RecipePage />}
        {!context.isRegistering &&
          context.isLoggedIn &&
          context.currentPage === "profile" && <ProfilePage />}
      </main>
      {context.isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
