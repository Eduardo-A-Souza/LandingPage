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
          <div className="main-container justify-content-center px-4 px-md-0 ms-0 ms-md-5 me-0 me-md-4 order-2 order-md-2">
            <p className="fs-5 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium eaque nulla reprehenderit minus veniam quos corporis
              repellat debitis rerum tempore consectetur modi quas aliquid natus
              qui facilis nisi, sed in!
            </p>
          </div>
        </MainBanner>

        {/* Grid de produtos */}
        <div className="container main-products row g-4">
          {/* Mapeamento dos produtos - cada produto gera um card */}
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
                  <h5 className="card-title">{produto.nome}</h5>
                  <p className="card-text">{produto.preco}</p>
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
        </div>
      </MainContainer>

      {/* Rodapé - Informações de contato */}
      <footer className="container-fluid py-4 footer-container ">
        <div className="row justify-content-center text-center">
          {/* Seção WhatsApp */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fab fa-whatsapp fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">WhatsApp</p>
            <a className="btn custom-link" href="#">(61) 9 9999-9999</a>
          </div>

          {/* Seção E-mail */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fas fa-envelope fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">E-mail</p>
            <a className="btn custom-link" href="#">email@email.com</a>
          </div>

          {/* Seção Telefone */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fas fa-phone fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">Telefone</p>
            <a className="btn custom-link" href="#">(61) 9 9999-9999</a>
          </div>
        </div>
      </footer>
    </CustomContainer>
  );
}

export default Home;
