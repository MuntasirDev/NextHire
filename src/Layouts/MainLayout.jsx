import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Pages/Shared Components/NavBar";
import Footer from "../Pages/Shared Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
