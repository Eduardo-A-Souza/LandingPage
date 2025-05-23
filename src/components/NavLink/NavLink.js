import React from "react";
import "./NavLink.css";

const NavLink = ( {children} ) => {
    return (
        <a className="btn btn-link custom-btn">{children}</a>
    );
};

export default NavLink;
