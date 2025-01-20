/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ConfContext = createContext();

function ConfProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <ConfContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </ConfContext.Provider>
  );
}

function useConf() {
  const context = useContext(ConfContext);
  if (context === undefined)
    throw new Error(
      "ConfContext was used outside the ConfProvider"
    );
  return context;
}

export { ConfProvider, useConf };
