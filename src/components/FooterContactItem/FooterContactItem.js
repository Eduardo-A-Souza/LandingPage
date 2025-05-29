// componente para os itens de contato do rodapé
import React from "react";
import "./FooterContactItem.css";
import NavLink from "../NavLink/NavLink.js";

const FooterContactItem = ( {iconClass, label, link, children} ) => {
    return (
        <div className="col-12 col-md-3 mb-4">
            <i className={`${iconClass} fs-3 text-success mb-2`} />
            <p className="mb-1 fs-5">{label}</p>
            <a className="btn custom-link" href={link}>{children}</a>
        </div>
    );
};

export default FooterContactItem;
