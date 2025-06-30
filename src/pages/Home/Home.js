/*
 * Página inicial do site
 * Responsável por exibir a landing page e redirecionar para os produtos disponiveis
 */
import React from "react";
// import dos componentes usados na pagina 
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
import FooterLinks from "../../components/FooterLinks/FooterLinks.js";
import HeaderLink from "../../components/HeaderLink/HeaderLink.js";

import { Link } from "react-router-dom";

import "../../styles/globalStyles.css";
import "./HomeStyles.css";

const categorias = [
  {
    nome: "Fanem",
    imagem: "/images/logo_fanem.png",
    rota: "/produtos/fanem"
  },
  {
    nome: "Protec",
    imagem: "/images/logo_protec.png",
    rota: "/produtos/protec",
  },
  {
    nome: "Magnamed",
    imagem: "/images/logo_magnamed.png",
    rota: "/produtos/magnamed",
  }
];

// Componente principal da página Home
function Home() {
  return (
    <CustomContainer>
      {/* Cabeçalho - Logo e navegação */}
      <HeaderContainer>
        <Logo
          src="/images/Logo_astem_header.jpg"
          alt="Logo_Astem"
        />
        {/* Menu de navegação */}
        <HeaderLink />
      </HeaderContainer>

      {/* Conteúdo principal */}

      <MainContainer className="my-0 my-sm-2 my-md-5">
        {/* Banner principal com apresentação da empresa */}
        <MainBanner>
          <Sidebar className="w-75 w-md-50 mb-4" >
            <img src="/images/Logo_astem_main.png" alt="Logo_Astem" className="w-75 w-md-50" />
          </Sidebar>
          <HeroSection className="w-75 w-md-50">
            <p className="fs-4 mb-0">
              Soluções que respeitam à Vida
            </p>
          </HeroSection>
        </MainBanner>

        {/* Grid de categorias */}
        <h3 className="text-center my-5">Quem representamos</h3>
        <MainProducts className="my-0 my-sm-2 my-md-5" display="row">
          {categorias.map((cat) => (
            <div key={cat.nome} className="d-flex col-sm-6 col-md-4 mb-4 px-2 px-md-4 justify-content-center">
              <Link to={cat.rota} className="text-decoration-none">
                <div className="card box-product custom-card-product">
                  <div className="card-body d-flex flex-column align-items-center">
                    <img
                      src={cat.imagem}
                      className="card-img-top mb-4 card-img-fixed"
                      alt={cat.nome}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </MainProducts>
      </MainContainer>

      {/* Rodapé - Informações de contato */}
      <FooterLinks />
    </CustomContainer >
  );
};

export default Home;
