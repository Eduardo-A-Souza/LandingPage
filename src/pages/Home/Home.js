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
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";

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
        <NavContainer>
          <NavLink className="px-3 py-4" href="/">Inicio</NavLink>
          <NavLink className="dropdown px-3 py-4">
            <button
              className="custom-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Produtos
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="produtos/Fanem">Fanem</a></li>
              <li><a className="dropdown-item" href="produtos/Protec">Protec</a></li>
              <li><a className="dropdown-item" href="produtos/Magnamed">Magnamed</a></li>
            </ul>
          </NavLink>
          <NavLink className="px-3 py-4">Sobre</NavLink>
        </NavContainer>
      </HeaderContainer>

      {/* Conteúdo principal */}

      <MainContainer className="my-0 my-sm-2 my-md-5">
        {/* Banner principal com apresentação da empresa */}
        <MainBanner>
          <Sidebar className="w-50">
            <img src="/images/Logo_astem_main.png" alt="Logo_Astem" className="w-50" />
          </Sidebar>
          <HeroSection className="w-50">
            <p className="fs-4 mb-0">
              Soluções que respeitam à Vida             
            </p>
          </HeroSection>
        </MainBanner>

        {/* Grid de categorias */}
        <h3 className="text-center my-5">Quem representamos</h3>
        <MainProducts className="my-0 my-sm-2 my-md-5">
          {categorias.map((cat) => (
            <div key={cat.nome} className="d-flex col-sm-6 col-md-4 mb-4 px-2 px-md-3 justify-content-center">
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
    </CustomContainer >
  );
};

export default Home;
