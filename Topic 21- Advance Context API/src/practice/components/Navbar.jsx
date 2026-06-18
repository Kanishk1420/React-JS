import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "../../practice/context/contextUtils";
const Navbar = () => {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    setTheme(theme === "white" ? "dark" : "white");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "white" ? "#ffffff" : "#1a1a1a",
        color: theme === "white" ? "#000000" : "#ffffff",
        padding: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={changeTheme}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          transition: "all 0.3s ease",
          color: theme === "white" ? "#000000" : "#ffffff",
        }}
      >
        {theme === "white" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
};

export default Navbar;
