// componente para os links de navegação da pagina
import React from "react";
import "./NavLink.css";

const NavLink = ({ children, className = "", href = "" }) => {
    return (
        <a className={`link-underline-slide ${className}`} href={href}>
            <span className="">
                {children}
            </span>
        </a>
    );
};

export default NavLink;
