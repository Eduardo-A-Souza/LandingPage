import React from "react";
import "./MainBanner.css";

const MainBanner = ({ children }) => {
    return (
        <div className="main-banner flex-column flex-md-row justify-content-center text-center align-items-center d-flex my-5">
            {children}
        </div>
    )
};

export default MainBanner;
