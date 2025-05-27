// Componente que envolve o conteúdo principal da página
import React from "react";
import "./MainContainer.css";

const MainContainer = ({ children, className = "" }) => {
    return (
        <main className={`container text-center d-flex flex-column justify-content-between align-items-center main-container p-2 w-100 ${className}`}>
            {children}
        </main>
    );
};

export default MainContainer;
