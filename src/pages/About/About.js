import React from "react";

import './AboutStyles.css';

import CustomContainer from "../../components/CustomContainer/CustomContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";
import MainContainer from "../../components/MainContainer/MainContainer";


function About() {
    return (
        <CustomContainer>
            <HeaderContainer>
                <Logo
                    src="/images/Logo_astem_header.jpg"
                    alt="Logo_Astem"
                />
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
            </HeaderContainer >
            <MainContainer>
                
            </MainContainer>
            <FooterContainer>
                {/* Contato WhatsApp */}
                <FooterContactItem
                    iconClass="fab fa-whatsapp"
                    label="WhatsApp"
                    link="#"
                >
                    (61) 99223-2377
                </FooterContactItem>
                {/* Contato E-mail */}
                <FooterContactItem
                    iconClass="fas fa-envelope"
                    label="E-mail"
                    link="#"
                >
                    atendimento@astembsb.com
                </FooterContactItem>
                {/* Contato Telefone */}
                <FooterContactItem
                    iconClass="fas fa-phone"
                    label="Telefone"
                    link="#"
                >
                    (61) 3361-3455
                </FooterContactItem>
                <FooterContactItem
                    iconClass="fas fa-map-marker-alt"
                    label="Endereço"
                    link="https://waze.com/ul/h6vjyhf8zw"
                >
                    SIA Trecho 02 Lote 205/275 - Brasília/DF
                </FooterContactItem>
            </FooterContainer>
        </CustomContainer>
    )
}

export default About