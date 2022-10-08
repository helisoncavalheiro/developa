import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";

function Sidebaer() {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
          <Link className='nav-link ' href='/'>
            <span>
              <FontAwesomeIcon icon={faTableColumns} />
              &nbsp; Projetos
            </span>
          </Link>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link nav-link-collapse collapsed'
            data-bs-target='#components-nav'
            data-bs-toggle='collapse'
            href='#components-nav'>
            <span>
              <FontAwesomeIcon icon={faTableColumns} />
              &nbsp; Components
            </span>
          </a>
          <ul
            id='components-nav'
            className='nav-item-content collapse'
            data-bs-parent='#sidebar-nav'>
            <li>
              <a href='components-alerts.html'>
                <i className='bi bi-circle'></i>
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a href='components-accordion.html'>
                <i className='bi bi-circle'></i>
                <span>Accordion</span>
              </a>
            </li>
            <li>
              <a href='components-badges.html'>
                <FontAwesomeIcon icon={faCircle} />
                <span>Badges</span>
              </a>
            </li>
            <li>
              <a href='components-breadcrumbs.html'>
                <i className='bi bi-circle'></i>
                <span>Breadcrumbs</span>
              </a>
            </li>
            <li>
              <a href='components-buttons.html'>
                <i className='bi bi-circle'></i>
                <span>Buttons</span>
              </a>
            </li>
            <li>
              <a href='components-cards.html'>
                <i className='bi bi-circle'></i>
                <span>Cards</span>
              </a>
            </li>
            <li>
              <a href='components-carousel.html'>
                <i className='bi bi-circle'></i>
                <span>Carousel</span>
              </a>
            </li>
            <li>
              <a href='components-list-group.html'>
                <i className='bi bi-circle'></i>
                <span>List group</span>
              </a>
            </li>
            <li>
              <a href='components-modal.html'>
                <i className='bi bi-circle'></i>
                <span>Modal</span>
              </a>
            </li>
            <li>
              <a href='components-tabs.html'>
                <i className='bi bi-circle'></i>
                <span>Tabs</span>
              </a>
            </li>
            <li>
              <a href='components-pagination.html'>
                <i className='bi bi-circle'></i>
                <span>Pagination</span>
              </a>
            </li>
            <li>
              <a href='components-progress.html'>
                <i className='bi bi-circle'></i>
                <span>Progress</span>
              </a>
            </li>
            <li>
              <a href='components-spinners.html'>
                <i className='bi bi-circle'></i>
                <span>Spinners</span>
              </a>
            </li>
            <li>
              <a href='components-tooltips.html'>
                <i className='bi bi-circle'></i>
                <span>Tooltips</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebaer;
