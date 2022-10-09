import Sidebar from "@/Components/Sidebar/Sidebar";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCheckSquare,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
function Sidenav() {
  return (
    <Sidebar>
      <Sidebar.NavItem icon={faTableColumns} title='Dashboard' linkTo='/' />
      <Sidebar.NavItemCollapse icon={faCheckSquare} title='Issues'>
        <Sidebar.NavItem icon={faCircle} title='Item 1' linkTo={"/issues/1"} />
        <Sidebar.NavItem icon={faCircle} title='Item 2' linkTo={"/issues/2"} />
        <Sidebar.NavItem icon={faCircle} title='Item 3' linkTo={"/issues/3"} />
        <Sidebar.NavItem icon={faCircle} title='Item 4' linkTo={"/issues/4"} />
      </Sidebar.NavItemCollapse>
    </Sidebar>
  );
}

export default Sidenav;
