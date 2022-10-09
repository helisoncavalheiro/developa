import MessageArea from "@/Components/MessageArea/MessageArea";
import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Sidenav from "./Sidenav";

const Layout = ({ children }) => {
  return (
    <div id='main-wrapper'>
      <Header />
      <Sidenav />
      <main
        id='main'
        className='main-content position-relative border-radius-lg'
        style={{ height: "100vh" }}>
        <div className='container-fluid py-4'>
          {children}
          <MessageArea />
        </div>
      </main>
    </div>
  );
};

export default Layout;
