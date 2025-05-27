// componente que envolve a barra de navegação da pagina 
import React from "react";
import "./NavContainer.css";

const NavContainer = ( {children} ) => {
    return (
        <nav className="d-flex px-1 px-sm-3">
            {children}
        </nav>
    );
};

export default NavContainer;
