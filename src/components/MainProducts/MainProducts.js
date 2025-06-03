// componente que envolve a lista de produtos da pagina
import React from "react";
import "./MainProducts.css";

const MainProducts = ( {children, className = ""} ) => {
    return (
        <div className={`container main-products row g-4 ${className}`}>
            {children}
        </div>
    );
};

export default MainProducts;
