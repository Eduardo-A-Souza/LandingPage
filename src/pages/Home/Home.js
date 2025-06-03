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
import { produtos } from "../../data/DataProducts";

import "../../styles/globalStyles.css";
import "./HomeStyles.css";

const categorias = [
  {
    nome: "Fanem",
    imagem: "/images/incubadoraVision_2286.png",
    rota: "/produtos/neonatologia"
  },
  {
    nome: "Protec",
    imagem: "/images/incubadoraVision_2286.png",
    rota: "#",
  },
  {
    nome: "Magnamed",
    imagem: "/images/incubadoraVision_2286.png",
    rota: "#",
  }
];

// Componente principal da página Home
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

        {/* Grid de categorias */}
        <MainProducts className="mb-5">
        <h3 className="text-center my-5">Trabalhamos com</h3>
          {categorias.map((cat) => (
            <div key={cat.nome} className="d-flex col-sm-6 col-md-4 mb-4 px-2 px-md-3 justify-content-center">
              <Link to={cat.rota} className="text-decoration-none">
                <div className="card box-product custom-card-product">
                  <div className="card-body d-flex flex-column align-items-center">
                    <img
                      src={cat.imagem}
                      className="card-img-top mb-4"
                      alt={cat.nome}
                    />
                    <h5 className="card-title py-2 fs-3">{cat.nome}</h5>
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
