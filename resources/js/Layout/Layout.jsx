import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className='g-sidenav-show bg-gray-100'>
      <main className='main-content position-relative border-radius-lg'>
        <Navbar></Navbar>
        <div className='container-fluid py-4'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
