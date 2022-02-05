import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-pokedex">Pokedex</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
