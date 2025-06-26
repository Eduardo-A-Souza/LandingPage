// componente que envolve a lista de produtos da pagina
import React from "react";
import "./MainProducts.css";

const MainProducts = ( { children, className = "", display = "d-flex"} ) => {
    return (
        <div className={`container ${display} ${className}`}>
            {children}
        </div>
    );
};

export default MainProducts;
