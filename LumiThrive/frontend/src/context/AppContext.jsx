import React, { createContext } from "react";
import { counsellors } from "../assets/assets_frontend/assets";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = 'Rs';
  const value = {
    counsellors,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
