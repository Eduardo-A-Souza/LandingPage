// componente que envolve a barra de navegação da pagina 
import React from "react";
import "./NavContainer.css";

const NavContainer = ( { children, className = "" } ) => {
    return (
        <nav className={`d-flex ${className}`}>
            {children}
        </nav>
    );
};

export default NavContainer;
