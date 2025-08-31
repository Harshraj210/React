import React from "react";

export default function ThemeBtn() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onchangeBtn}
        checked={themeMode === "dark"}
      />
    </label>
  );
}
