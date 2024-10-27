import React, { createContext, useState, useContext } from "react";

// Create a context for total values
const TotalContext = createContext();

// Create a provider component
export const TotalProvider = ({ children }) => {
  const [totals, setTotals] = useState(0);

  const updateTotals = (newTotal) => {
    setTotals((prev) => prev + newTotal);
  };

  return (
    <TotalContext.Provider value={{ totals, updateTotals }}>
      {children}
    </TotalContext.Provider>
  );
};

// Custom hook for using the TotalContext
export const useTotalContext = () => {
  return useContext(TotalContext);
};
