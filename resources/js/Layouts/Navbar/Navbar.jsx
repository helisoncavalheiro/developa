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
        <nav aria-label='breadcrumb'></nav>
        <div
          className='collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4'
          id='navbar'>
          <div className='ms-md-auto pe-md-3 d-flex align-items-center'>
            <div className='input-group'>
              <span className='input-group-text text-body'>
                <i className='fas fa-search' aria-hidden='true'></i>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='Digite aqui...'
              />
            </div>
          </div>
          <ul className='navbar-nav  justify-content-end '>
            <li class='nav-item ps-3 d-flex align-items-center'>
              <a
                href='javascript:;'
                class='nav-link text-white p-0'
                id='iconNavbarSidenav'>
                <div class='sidenav-toggler-inner'>
                  <i class='sidenav-toggler-line bg-white'></i>
                  <i class='sidenav-toggler-line bg-white'></i>
                  <i class='sidenav-toggler-line bg-white'></i>
                </div>
              </a>
            </li>
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
