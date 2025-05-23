import React from "react";
import "./CustomContainer.css";

const CustomContainer = ({ children }) => {
    return (
        <div className="container-inline custom-container d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
    );
};


export default CustomContainer;