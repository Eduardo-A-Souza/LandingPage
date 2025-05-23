import React from "react";
import "./HeaderContainer.css";

const HeaderContainer = ( {children} ) => {
    return (
        <header className="d-flex justify-content-between align-items-center py-4 px-2 px-md-4 header-container w-100">
            {children}
        </header>
    );
};

export default HeaderContainer;

