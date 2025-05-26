import React from "react";
import "./FooterContainer.css";

const FooterContainer = ( { children } ) => {
    return (
        <footer className="container-fluid py-4 footer-container ">
            <div className="row justify-content-center text-center">
                {children}
            </div>
        </footer>
    );
};

export default FooterContainer;
