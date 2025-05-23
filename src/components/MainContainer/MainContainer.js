import React from "react";
import "./MainContainer.css";

const MainContainer = ({ children }) => {
    return (
        <main className="container text-center d-flex flex-column justify-content-between align-items-center main-container p-2 w-100">
            {children}
        </main>
    );
};

export default MainContainer;
