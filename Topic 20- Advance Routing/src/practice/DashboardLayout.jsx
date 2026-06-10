import React from 'react'
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Changecolor } from '../components/Changecolor'
const DashboardLayout = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "5px",
          marginBottom: "20px",
          
        }}>
        <NavLink to="/dashboard/my" style={Changecolor}>
          My Profile 
        </NavLink>
        <NavLink to="/dashboard/courses" style={Changecolor}>
          My Courses
        </NavLink>
      </nav>
    <Outlet />
    </div>
  )
}

export default DashboardLayout
