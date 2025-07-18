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
import HeroSection from "../../components/HeroSection/HeroSection.js";
import HeaderLink from "../../components/HeaderLink/HeaderLink.js";
import FooterLinks from "../../components/FooterLinks/FooterLinks.js";

import { p } from "framer-motion/client";

function OrderComplete() {
    const { id } = useParams();

    // Encontra o produto selecionado pelo ID
    const produtoSelecionado = produtos.find(produto => produto.id === parseInt(id));
    const classeProduto = produtoSelecionado.categoria;
    const outrosProdutos = produtos.filter(produto => produto.categoria === classeProduto && produto.id !== produtoSelecionado.id);
    console.log(outrosProdutos);

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
                <Logo
                    src="/images/Logo_astem_header.jpg"
                    alt="Logo_Astem"
                />
                <HeaderLink />
            </HeaderContainer>

            {/* Conteúdo principal */}
            <MainContainer className="flex-fill py-5">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center align-items-md-start info-products mb-4">
                    <Sidebar className="w-75 w-md-50">
                        <h2 className="text-center fs-1 md-fs-3 pb-3">{produtoSelecionado.nome}</h2>
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

                <h4 className="fs-3 mb-4 mx-4 md-mx-0">Outros:</h4>
                <MainProducts className="scroll-produtos d-flex overflow-auto">
                    {outrosProdutos.map((produto) => (
                        <div key={produto.id} className=" mb-4 px-4 produto-card mx-4">
                            <Link to={`/pedido/${produto.id}`} className="text-decoration-none">
                                <div className="card h-100 box-product custom-card-product">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img
                                            src={produto.imagem}
                                            alt={produto.nome}
                                            className="product-img card-img-top mb-3"
                                        />
                                        <p className="text-center m-0">{produto.nome}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </MainProducts>
            </MainContainer>

            {/* Rodapé - Informações de contato */}
                <FooterLinks /> 
        </CustomContainer>
    );
}

export default OrderComplete; 