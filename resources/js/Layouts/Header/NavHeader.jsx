import { useState } from "react";

function NavHeader() {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebarControl = (evt) => {
    setIsActive(!isActive);

    // Não quis usar um state para uma alteração meramente visual.
    // Uma atualização de estado no componente raiz forçaria uma re-renderização global da aplicação
    // Por isso preferi fazer um toggle diretamente no classList do main-wrapper
    let mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.classList.toggle("toggle-sidebar");
  };
  return (
    <div className='nav-header'>
      <div className='nav-control' onClick={toggleSidebarControl}>
        <div className={"hamburger " + (isActive && " is-active")}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
