import React, { createContext, useContext, useState, useEffect } from "react";

//  Create the Context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//  Create the Provider Component that will wrap your app
export const ThemeProvider = ({ children }) => {
  // This is where all the logic should be
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//  Create the custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
