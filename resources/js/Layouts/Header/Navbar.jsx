import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import UserMenu from "./UserMenu";
import NotificationMenu from "./NotificationMenu";

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-main navbar-expand-lg px-0 shadow-none border-radius-xl bg-white'
      id='navbarBlur'
      data-scroll='false'>
      <div className='container-fluid py-1 px-3'>
        <div
          className='collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end'
          id='navbar'>
          <ul className='navbar-nav justify-content-end'>
            <li className='nav-item dropdown d-flex align-items-center pe-3'>
              <UserMenu />
            </li>
            <li className='nav-item dropdown pe-2 d-flex align-items-center'>
              <NotificationMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
