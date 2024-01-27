"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAppContext } from "../context";
import { MoonIcon, SunIcon } from "./Icons";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { thememode, setthememode } = useAppContext();

  const toggletheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      setthememode("pastel");
    } else {
      setthememode("dracula");
    }
    //setthememode(theme)
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className="rubik900" onClick={() => toggletheme()}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
}

export default ThemeSwitch;
