import { Sun, Moon } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useThemeContext, useAuthContext } from "../../practice/context/contextUtils";
const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const { user, pass } = useAuthContext();
  const navigate = useNavigate();

  const changeTheme = () => {
    setTheme(theme === "white" ? "dark" : "white");
  };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    user.setusername("");
    pass.setpassword("");
    navigate("/");
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
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
      {localStorage.getItem("token") && (
        <Button onClick={handleLogout}>Logout</Button>
      )}
      </div>
    </div>
  );
};

export default Navbar;
