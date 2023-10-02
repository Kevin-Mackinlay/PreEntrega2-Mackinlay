import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { hover } from "@testing-library/user-event/dist/hover";

const Navbar = () => {
  return (
    <div style={styles.Navbar}>
      <h1 style={{color:"blue"}}>Tienda Sports</h1>
      <div style={styles.Links}>
        <NavLink  activeClassName to={"/"}>
          <h4 style={{ color: "Blue" , textDecoration:"none"}}>Home</h4>
        </NavLink>
        <NavLink activeClassName to={"/cart"}>
          <h4 style={{ color: "Blue" }}>Cart</h4>
        </NavLink>
        <NavLink activeClassName to={"/products"}>
          <h4 style={{ color: "Blue" }}>Products</h4>
        </NavLink>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    borderBottom: "1px solid black",
    
  },
  Links: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
