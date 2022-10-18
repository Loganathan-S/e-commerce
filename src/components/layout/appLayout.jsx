import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer";
import Header from "../../pages/header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
