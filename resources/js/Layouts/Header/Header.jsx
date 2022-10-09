import Navbar from "./Navbar";
import NavHeader from "./NavHeader";

function Header() {
  return (
    <header className='header fixed-top'>
      <NavHeader />
      <Navbar />
    </header>
  );
}

export default Header;
