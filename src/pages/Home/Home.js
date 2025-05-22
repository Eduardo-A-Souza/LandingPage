import React from "react";

import { Link } from "react-router-dom";
import { produtos } from "../../data/DataProducts";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globalStyles.css";
import "./HomeStyles.css";


function Home() {
  return (
    <div className="container-inline custom-container">
      {/* cabeçalho */}
      <header className="d-flex justify-content-between align-items-center py-4 px-4 custom-topbar">
        <div className="logo-astem">
          <img src="#" alt="Logo" />
        </div>
        <nav className="d-flex px-3">
          <a className="btn btn-link custom-btn">teste1</a>
          <a className="btn btn-link custom-btn">teste2</a>
          <a className="btn btn-link custom-btn">teste3</a>
          <a className="btn btn-link custom-btn">teste4</a>
        </nav>
      </header>

      {/* Layout principal com conteúdo lateral e principal */}
      <main className="container text-center d-flex flex-column justify-content-between align-items-center  main-container p-2">
        <div className="main-banner d-flex my-5">
          <aside className="sidebar me-5 text-center">
            <h2 className="sidebar-title fs-1">Astem</h2>
          </aside>
          <div className="main-container justify-content-center ms-5 me-4">
            <p className="fs-5 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium eaque nulla reprehenderit minus veniam quos corporis
              repellat debitis rerum tempore consectetur modi quas aliquid natus
              qui facilis nisi, sed in!
            </p>
          </div>
        </div>
        <div className="contianer main-products">
          <div className="row g-4">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="col-sm-6 col-md-4 col-lg-3 mb-4 px-4"
              >
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
        </div>
      </main>
      {/* final da pagina com as formas de contato com a empresa */}
      <footer className="container-fluid py-4 footer-container">
        <div className="row justify-content-center text-center">
          {/* WhatsApp */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fab fa-whatsapp fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">WhatsApp</p>
            <a className="btn custom-link" href="#">(61) 9 9999-9999</a>
          </div>

          {/* E-mail */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fas fa-envelope fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">E-mail</p>
            <a className="btn custom-link" href="#">email@email.com</a>
          </div>

          {/* Telefone */}
          <div className="col-12 col-md-4 mb-4">
            <i className="fas fa-phone fs-3 text-success mb-2" />
            <p className="mb-1 fs-5">Telefone</p>
            <a className="btn custom-link" href="#">(61) 9 9999-9999</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
