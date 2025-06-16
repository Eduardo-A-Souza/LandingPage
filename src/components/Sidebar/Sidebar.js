// componente para a barra lateral da pagina
import React from "react";
import "./Sidebar.css";

const Sidebar = ( { children, className = "" } ) => {
    return (
        <aside className={`sidebar me-0 me-md-5 my-4 order-1 order-md-1 ${className}`}>
            {children}
        </aside>
    )
}

export default Sidebar;
