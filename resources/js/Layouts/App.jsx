import MessageArea from "@/Components/MessageArea/MessageArea";
import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className='g-sidenav-show bg-gray-100'>
      <main
        className='main-content position-relative border-radius-lg'
        style={{ height: "100vh" }}>
        <Navbar></Navbar>
        <div className='container-fluid py-4'>
          {children}
          <MessageArea />
        </div>
      </main>
    </div>
  );
};

export default Layout;
