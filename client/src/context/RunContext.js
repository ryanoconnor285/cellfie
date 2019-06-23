import React, { useState, createContext } from "react";

export const RunContext = createContext({});

export const RunProvider = ({ children }) => {
  const [run, setRun] = useState({});
  return (
    <RunContext.Provider value={[run, setRun]}>{children}</RunContext.Provider>
  );
};
