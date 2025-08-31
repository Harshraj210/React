import React from "react";
import useTheme from "../context/Theme";


export default function ThemeBtn() {
  const {themeMode,darkTheme,lightTheme}=useTheme()
  const onchangeBtn = (e) => {
    const darkmodestatus=e.currentTarget.checked


     if (themeMode==="dark") {
       lightTheme()
     }
     else{
     darkTheme()
     }


  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onchangeBtn}
        checked={themeMode==="dark"}
      />
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-foucus:ring-blue-400 dark:peer-foucus:ring-blue-800 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
      peer-checked:after:translate-x-full peer-checked:after:border-white"
      ></div>
    </label>
  );
}
