import { createContext, useContext } from "react";

export const ThemeDataContext = createContext();

export const useThemeContext = () => {
  const ctx = useContext(ThemeDataContext);
  if (!ctx)
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  return ctx;
};
