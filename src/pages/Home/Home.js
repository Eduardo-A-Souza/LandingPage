/*
 * Página inicial do site
 * Responsável por exibir a landing page com todos os produtos disponíveis
 */
import React from "react";
import CustomContainer from "../../components/CustomContainer/CustomContainer.js";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import MainContainer from "../../components/MainContainer/MainContainer.js";
import MainBanner from "../../components/MainBanner/MainBanner.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeroSection from "../../components/HeroSection/HeroSection.js";
import MainProducts from "../../components/MainProducts/MainProducts.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";

import { Link } from "react-router-dom";
import { produtos } from "../../data/DataProducts";

import "../../styles/globalStyles.css";
import "./HomeStyles.css";


function Home() {
  return (
    <CustomContainer>
      {/* Cabeçalho - Logo e navegação */}
      <HeaderContainer>
        <Logo />
        {/* Menu de navegação */}
        <NavContainer>
          <NavLink>teste1</NavLink>
          <NavLink>teste2</NavLink>
          <NavLink>teste3</NavLink>
          <NavLink>teste4</NavLink>
        </NavContainer>
      </HeaderContainer>

      {/* Conteúdo principal */}
      <MainContainer>
        {/* Banner principal com apresentação da empresa */}
        <MainBanner>
          <Sidebar>
            <h2 className="sidebar-title fs-1">Astem</h2>
          </Sidebar>
          <HeroSection>
            <p className="fs-5 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium eaque nulla reprehenderit minus veniam quos corporis
              repellat debitis rerum tempore consectetur modi quas aliquid natus
              qui facilis nisi, sed in!
            </p>
          </HeroSection>
        </MainBanner>

        {/* Grid de produtos */}
        <MainProducts>
          {/* Geração dos cards de produtos dinâmicos */}
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="col-sm-6 col-md-4 col-lg-3 mb-4 px-4"
            >
              {/* Card individual do produto */}
              <div className="card h-100 box-product">
                <img
                  src={produto.imagem}
                  className="card-img-top"
                  alt={produto.nome}
                />
                <div className="card-body">
                  <h5 className="card-title py-2">{produto.nome}</h5>
                  <Link
                    to={`/produto/${produto.id}`}
                    className="btn custom-btn w-75 custom-btn-product"
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </MainProducts>
      </MainContainer>

      {/* Rodapé - Informações de contato */}
      <FooterContainer>
        <FooterContactItem
          iconClass="fab fa-whatsapp"
          label="WhatsApp"
          link="#"
        >
          (61) 9 9999-9999
        </FooterContactItem>
        <FooterContactItem
          iconClass="fas fa-envelope"
          label="E-mail"
          link="#"
        >
          email@email.com
        </FooterContactItem>
        <FooterContactItem
          iconClass="fas fa-phone"
          label="Telefone"
          link="#"
        >
          (61) 9 9999-9999
        </FooterContactItem>
      </FooterContainer>
    </CustomContainer>
  );
};

export default Home;
