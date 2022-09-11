import React from "react";

export default function NotificationMenu() {
  return (
    <>
      <a
        href='#'
        className='nav-link text-white p-0'
        id='dropdownMenuButton'
        data-bs-toggle='dropdown'
        aria-expanded='false'>
        <i className='fa fa-bell cursor-pointer'></i>
      </a>
      <ul
        className='dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4'
        aria-labelledby='dropdownMenuButton'>
        <li className='mb-2'>
          <span className='dropdown-item border-radius-md'>
            Nenhuma notificação
          </span>
        </li>
      </ul>
    </>
  );
}
