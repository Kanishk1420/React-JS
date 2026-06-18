import { useMemo, useState } from "react";
import { ThemeDataContext } from "./themeUtils";

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("lightseagreen");
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  console.log("ThemeContext rendered");
  return (
    <ThemeDataContext.Provider value={value}>
      {children} {/*Always destructure children with { children } otherwise you're naming the whole props object as children.*/}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
