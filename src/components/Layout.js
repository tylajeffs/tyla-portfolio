import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from './Navbar';
import Toggle from "./Toggle";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Toggle />
    </>
  );
};

export default Layout;