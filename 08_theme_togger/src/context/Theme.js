import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode:"light",
  darkTheme:()=>{},
  lightTheme:()=>{}
});
export const ThemeProvider=ThemeContext.Provider

// earlier we were using usecontext(Usercontext),now we created a custom hook
export default  function useTheme(){
  return useContext(ThemeContext)
    
  
}
