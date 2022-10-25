import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Sidebar({ children }) {
  let subComponentList = Object.keys(Sidebar);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        {subComponents.map((component) => component)}
      </ul>
    </aside>
  );
}
/**
 * @param {Object} props
 * @param {string} props.icon  - Icon to place before the nav item.
 * @param {string} props.title  - Nav item title.
 * @param {string} props.linkTo  - Where to.
 * @returns
 */
const NavItem = ({ icon, title, linkTo }) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link ' href={linkTo}>
        <span>
          <FontAwesomeIcon icon={icon} />
          &nbsp; {title}
        </span>
      </Link>
    </li>
  );
};

Sidebar.NavItem = NavItem;
/**
 * @param {Object} props
 * @param {string} props.icon  - Icon to place before the nav item.
 * @param {string} props.title  - Nav item title.
 * @returns
 */
const NavItemCollapse = ({ icon, title, children }) => {
  return (
    <li className='nav-item'>
      <a
        className='nav-link nav-link-collapse collapsed'
        data-bs-target='#components-nav'
        data-bs-toggle='collapse'
        href='#components-nav'>
        <span>
          <FontAwesomeIcon icon={icon} />
          &nbsp; {title}
        </span>
      </a>
      <ul
        id='components-nav'
        className='nav-item-content collapse'
        data-bs-parent='#sidebar-nav'>
        {children}
      </ul>
    </li>
  );
};
Sidebar.NavItemCollapse = NavItemCollapse;

export default Sidebar;
