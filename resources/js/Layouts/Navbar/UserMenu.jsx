import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserMenu() {
  const { auth } = usePage().props;

  return (
    <>
      <a
        href='#'
        data-bs-toggle='dropdown'
        className='nav-link font-weight-bold px-0'
        id='userMenuDropdown'>
        <i className='fa fa-user me-sm-1'></i>
        <span className='d-sm-inline d-none'>{auth.user.name}</span>
      </a>
      <ul
        className='dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4'
        aria-labelledby='userMenuDropdown'>
        <li className='mb-2'>
          <a className='dropdwon-item border-radius-md'>
            <FontAwesomeIcon icon={faUser} />
            Minha conta
          </a>
        </li>
        <li>
          <Link
            href='/logout'
            method='post'
            as='button'
            className='dropdwon-item border-radius-md btn btn-link'>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sair
          </Link>
        </li>
      </ul>
    </>
  );
}
