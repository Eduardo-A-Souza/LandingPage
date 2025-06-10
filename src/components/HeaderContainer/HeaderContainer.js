// componente que envolve o cabeçalho da pagina
import React from "react";
import "./HeaderContainer.css";

const HeaderContainer = ( {children, className = ""} ) => {
    return (
        <header className={`d-flex justify-content-between align-items-center px-1 px-md-4 header-container w-100 ${className}`}>
            {children}
        </header>
    );
};

export default HeaderContainer;

