"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [thememode, setthememode] = useState("");

  console.log("context - thememode " + thememode);
  return (
    <AppContext.Provider value={{ thememode, setthememode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
