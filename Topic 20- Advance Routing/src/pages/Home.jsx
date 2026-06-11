import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { activeLinkStyle } from "../components/Activetab";

const Home = () => {
  return (
    <div>
      <nav
        style={{
          padding: "10px",
          borderBottom: "1px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <NavLink to="/my" style={activeLinkStyle}>
          My
        </NavLink>
        <NavLink to="/About" style={activeLinkStyle}>
          About
        </NavLink>
        <NavLink to="/Courses" style={activeLinkStyle}>
          Courses
        </NavLink>
        <NavLink to="/Home" style={activeLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/" style={activeLinkStyle}>
          Welcome
        </NavLink>
         <NavLink to="/dashboard" style={activeLinkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/login" style={activeLinkStyle} onClick={() => localStorage.removeItem("token")}>
          Logout
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
