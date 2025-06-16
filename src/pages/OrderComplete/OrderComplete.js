/*
 * Página de finalização do pedido
 * Exibe a confirmação do pedido e instruções para finalizar a compra
 */
import React from "react";

import CustomContainer from "../../components/CustomContainer/CustomContainer.js";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";

import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import { Link } from "react-router-dom";

import "../../styles/globalStyles.css"
import "./OrderComplete.css"
import MainContainer from "../../components/MainContainer/MainContainer.js";

function OrderComplete() {
    // Obtém o ID do produto da URL
    const { id } = useParams();
    // Busca os dados do produto selecionado
    const orderData = produtos.find(
        (produto) => produto.id === parseInt(id)
    )

    return (
        <CustomContainer>
            <HeaderContainer>
                <Logo />
                <NavContainer>
                    <NavLink className="px-3 py-4">Inicio</NavLink>
                    <NavLink className="px-3 py-4">Produtos</NavLink>
                    <NavLink className="px-3 py-4">Sobre</NavLink>
                </NavContainer>
            </HeaderContainer>
            <MainContainer className="flex-fill">
                
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
    );
}

export default OrderComplete; 