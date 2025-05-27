// componente que envolvei o rodapé
import React from "react";
import "./FooterContainer.css";

const FooterContainer = ( { children, className = "" } ) => {
    return (
        <footer className={`container-fluid py-4 footer-container ${className}`}>
            <div className="row justify-content-center text-center">
                {children}
            </div>
        </footer>
    );
};

export default FooterContainer;
