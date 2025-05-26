import React from "react";
import "./MainProducts.css";

const MainProducts = ( {children} ) => {
    return (
        <div className="container main-products row g-4">
            {children}
        </div>
    );
};

export default MainProducts;
