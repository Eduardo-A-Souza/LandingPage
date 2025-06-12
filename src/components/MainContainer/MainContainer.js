// Componente que envolve o conteúdo principal da página
import React from "react";
import "./MainContainer.css";

const MainContainer = ({ direction = "column", containerClass = "container", className = "", children}) => {
    return (
        <main className={`${containerClass} text-center d-flex flex-${direction} justify-content-between align-items-center main-container p-2 w-100 ${className}`}>
            {children}
        </main>
    );
};

export default MainContainer;
