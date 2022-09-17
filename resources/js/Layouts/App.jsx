import MessageArea from "@/Components/MessageArea/MessageArea";
import Notification from "@/Components/Notifications/Notification";

import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className='g-sidenav-show bg-gray-100'>
      <main
        className='main-content position-relative border-radius-lg'
        style={{ height: "100vh" }}>
        <Navbar></Navbar>
        <div className='container-fluid py-4'>
          <MessageArea />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
