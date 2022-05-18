import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isRegistering: false,
  currentPage: "",
  onLogout: () => {},
  onLogin: () => {},
  onRegister: () => {},
  onSwitchToRegister: () => {},
  onGoToRecipes: () => {},
  onGoToProfile: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "1") {
      setIsLoggedIn(true);
      setCurrentPage("recipes");
    }
  }, []);

  const registerHandler = (email, password) => {
    // just a dummy demo, no need to store registered account
    setIsRegistering(false);
  };

  const switchToRegisterHandler = () => {
    setIsRegistering(true);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setCurrentPage("recipes");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const goToRecipesHandler = () => {
    setCurrentPage("recipes");
  };

  const goToProfileHandler = () => {
    setCurrentPage("profile");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isRegistering: isRegistering,
        currentPage: currentPage,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onRegister: registerHandler,
        onSwitchToRegister: switchToRegisterHandler,
        onGoToRecipes: goToRecipesHandler,
        onGoToProfile: goToProfileHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
