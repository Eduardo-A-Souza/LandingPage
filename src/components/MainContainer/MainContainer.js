// Componente que envolve o conteúdo principal da página
import React from "react";
import "./MainContainer.css";

const MainContainer = ({ direction = "column", containerClass = "container", className = "", children}) => {
    return (
        <main className={`${containerClass} d-flex flex-${direction} justify-content-center main-container p-2 ${className}`}>
            {children}
        </main>
    );
};

export default MainContainer;
