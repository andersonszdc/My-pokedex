import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./styles";

const Layout = () => {
  return (
    <>
      <Navbar>
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/my-pokedex">Pokedex</Link>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
