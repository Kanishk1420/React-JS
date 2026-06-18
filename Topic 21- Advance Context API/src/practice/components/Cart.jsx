import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../practice/context/contextUtils";
const Cart = () => {
  const { user, pass } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    user.setusername("");
    pass.setpassword("");
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to Cart Home</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Cart;
