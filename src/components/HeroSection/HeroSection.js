// Componente para exibir o texto de apresentação da empresa na hero section
import React from "react";
import "./HeroSection.css";

const HeroSection = ( {children} ) => {
    return (
        <div className="main-container justify-content-center px-4 px-md-0 ms-0 ms-md-5 me-0 me-md-4 order-2 order-md-2">
            {children}
        </div>
    );
};

export default HeroSection;
