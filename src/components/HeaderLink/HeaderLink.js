// componente de link do header
import React from "react";
import './HeaderLink.css';

import NavContainer from "../NavContainer/NavContainer";
import NavLink from "../NavLink/NavLink.js";

const HeaderLink = () => {
    return (
        <NavContainer>
            <NavLink className="px-3 py-4" href="/">Inicio</NavLink>
            <NavLink className="dropdown  ">
                <button
                    className="custom-btn dropdown-toggle px-3 py-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Produtos
                </button>

                <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="produtos/Fanem">Fanem</a></li>
                    <li><a className="dropdown-item" href="produtos/Protec">Protec</a></li>
                    <li><a className="dropdown-item" href="produtos/Magnamed">Magnamed</a></li>
                </ul>
            </NavLink>
            <NavLink className="px-3 py-4" href="/sobre">Sobre</NavLink>
        </NavContainer>
    );
};

export default HeaderLink;