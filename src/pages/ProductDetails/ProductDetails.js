/*
 * Página de finalização do pedido
 * Exibe a confirmação do pedido e instruções para finalizar a compra
 */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { produtos } from "../../data/DataProducts.js";
import "./ProductDetailsStyles.css";

import CustomContainer from "../../components/CustomContainer/CustomContainer.js";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import MainContainer from "../../components/MainContainer/MainContainer.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";
import Sidebar from "../../components/Sidebar/Sidebar.js"
import MainProducts from "../../components/MainProducts/MainProducts.js";
import HeroSection from "../../components/HeroSection/HeroSection.js"

function OrderComplete() {
    const { id } = useParams();

    // Encontra o produto selecionado pelo ID
    const produtoSelecionado = produtos.find(produto => produto.id === parseInt(id));

    if (!produtoSelecionado) {
        return (
            <CustomContainer>
                <div className="text-center py-5">
                    <h2>Produto não encontrado</h2>
                    <Link to="/produtos" className="btn btn-primary mt-3">
                        Voltar para Produtos
                    </Link>
                </div>
            </CustomContainer>
        );
    }


    return (
        <CustomContainer>
            {/* Cabeçalho - Logo e navegação */}
            <HeaderContainer>
                <Logo />
                <NavContainer>
                    <NavLink className="px-3 py-4">Inicio</NavLink>
                    <NavLink className="px-3 py-4">Produtos</NavLink>
                    <NavLink className="px-3 py-4">Sobre</NavLink>
                </NavContainer>
            </HeaderContainer>

            {/* Conteúdo principal */}
            <MainContainer className="flex-fill py-5">
                <div className="d-flex flex-row justify-content-around align-items-start">
                    <Sidebar className="w-50">
                        <h2 className="text-center fs-3 pb-3">{produtoSelecionado.nome}</h2>
                        <img
                            src={produtoSelecionado.imagem}
                            alt={produtoSelecionado.nome}
                            className="img-fluid"
                        />
                    </Sidebar>
                    <HeroSection className="d-flex flex-column justify-content-center align-items-start">
                        <h3 className="mb-3">Descrição:</h3>
                        <NavContainer className="mb-3">
                            <NavLink className="me-3">Caracteristicas</NavLink>
                            <NavLink className="me-3">Descrição</NavLink>
                            {/* <NavLink className="pe-3">Sobre</NavLink> */}
                        </NavContainer>
                        <ul>
                            {produtoSelecionado.descricao.map((item, index) => (
                                <li key={index} className="text-muted">{item}</li>
                            ))}
                        </ul>
                    </HeroSection>
                </div>

                <h4 className="fs-3">Outros:</h4>
            </MainContainer>

            {/* Rodapé - Informações de contato */}
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