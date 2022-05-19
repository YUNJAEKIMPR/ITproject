import React, { useState, useEffect } from "react";

const NavContext = React.createContext({
  currentPage: "home",
  onGoToHome: () => {},
  onGoToGrocery: () => {},
  onGoToRecipes: () => {},
  onGoToProfile: () => {},
  onGoToAboutUs: () => {},
});

export const NavContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "1") {
      setCurrentPage("home");
    }
  }, []);

  const goToRecipesHandler = () => {
    setCurrentPage("recipes");
  };

  const goToProfileHandler = () => {
    setCurrentPage("profile");
  };

  const goToHomeHandler = () => {
    setCurrentPage("home");
  };

  const goToGroceryHandler = () => {
    setCurrentPage("grocery");
  };

  const goToAboutUsHandler = () => {
    setCurrentPage("about_us");
  };

  return (
    <NavContext.Provider
      value={{
        currentPage: currentPage,
        onGoToHome: goToHomeHandler,
        onGoToGrocery: goToGroceryHandler,
        onGoToRecipes: goToRecipesHandler,
        onGoToProfile: goToProfileHandler,
        onGoToAboutUs: goToAboutUsHandler,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
