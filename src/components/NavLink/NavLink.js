// componente para os links de navegação da pagina
import React from "react";
import "./NavLink.css";

const NavLink = ({ children, className = "" }) => {
    return (
        <a className={`link-underline-slide ${className}`}>
            <span className="">
                {children}
            </span>
        </a>
    );
};

export default NavLink;
