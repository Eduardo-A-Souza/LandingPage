// componente para os links de navegação da pagina
import React from "react";
import "./NavLink.css";

const NavLink = ( {children, className = ""} ) => {
    return (
        <a className={`px-3 py-4 custom-link ${className}`}>{children}</a>
    );
};

export default NavLink;
