import React from "react";
import "./Sidebar.css";

const Sidebar = ( {children} ) => {
    return (
        <aside className="sidebar me-0 me-md-5 my-4 text-center order-1 order-md-1">
            {children}
        </aside>
    )
}

export default Sidebar;
