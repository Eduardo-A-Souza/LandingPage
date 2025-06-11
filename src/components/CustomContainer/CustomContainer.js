// componente que envolve toda a pagina
import React from "react";
import "./CustomContainer.css";

const CustomContainer = ({ children, className = "" }) => {
    return (
        <div className={`container-fluid custom-container d-flex flex-column justify-content-center align-items-center ${className}`}>
            {children}
        </div>
    );
};


export default CustomContainer;