"use client";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./Icons";
import { useAppContext } from "../context";

const SetTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "dark");
  const { setthememode } = useAppContext();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "dark" ? "light" : "dark");
    setthememode(theme);
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <>
      <div
        className={`tooltip lekton400 text-sm ${
          theme === "light" ? "tooltip-accent" : null
        } text-sm`}
        data-tip={`Go ${theme}?`}
      >
        <button onClick={toggleTheme}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </>
  );
};

export default SetTheme;
