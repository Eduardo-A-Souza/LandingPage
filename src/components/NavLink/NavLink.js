// componente para os links de navegação da pagina
import React from "react";
import "./NavLink.css";

const NavLink = ( {children, className = ""} ) => {
    return (
        <a className={`btn btn-link custom-btn ${className}`}>{children}</a>
    );
};

export default NavLink;
