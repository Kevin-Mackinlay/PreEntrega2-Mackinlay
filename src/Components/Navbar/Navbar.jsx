import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { hover } from "@testing-library/user-event/dist/hover";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={styles.Navbar}>
        <h1>SHOES STORE</h1>
        <div style={styles.Links}>
          <NavLink activeClassName to={"/"}>
            <h4 style={{ color: "white", textDecoration: "none" }}>Home</h4>
          </NavLink>
          <NavLink activeClassName to={"/cart"}>
            <h4 style={{ color: "white" }}>Cart</h4>
          </NavLink>
          <NavLink activeClassName to={"/products"}>
            <h4 style={{ color: "white" }}>Products</h4>
          </NavLink>
          <CartWidget />
        </div>
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
