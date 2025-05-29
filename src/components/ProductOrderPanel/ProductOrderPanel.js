import React from "react";

const ProductOrderPanel = ({ children, className = "" }) => {
    return (
        <div className={`product-order-panel d-flex flex-row justify-content-start align-items-center flex-column flex-md-row w-100 ${className}`}>
            {children}
        </div>
    );
};

export default ProductOrderPanel;