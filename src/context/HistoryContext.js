import React, { createContext } from "react";

export const HistoryContext = createContext({});

export const HistoryContextProvider = ({ history, children }) => {
  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
};
