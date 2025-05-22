import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import "./ProductStyles.css"

function Products() {
  const { id } = useParams();
  const produtoSelecionado = produtos.find(
    (produto) => produto.id === parseInt(id)
  )

  if (!produtoSelecionado) {
    return <p>este produto não foi encontrado </p>
  }

  return (
    <div className="container-inline custom-container d-flex flex-column justify-content-center align-items-center">
      {/* cabeçalho */}
      <header className="d-flex justify-content-between align-items-center py-4 px-4 custom-topbar w-100">
        <div className="logo-astem img-fluid">
          <a href="/">
            <img src="#" alt="Logo" />
          </a>
        </div>
        <nav className="d-flex px-3">
          <a className="btn btn-link custom-btn">teste1</a>
          <a className="btn btn-link custom-btn">teste2</a>
          <a className="btn btn-link custom-btn">teste3</a>
          <a className="btn btn-link custom-btn">teste4</a>
        </nav>
      </header>
      <main className="container-inline justfy-content-center align-tiems-center text-center my-4 py-4 w-75">
        <section className="container py-4 mb-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-1 order-md-1 mb-3 mb-md-0">
              <h2 className="fs-1">{produtoSelecionado.nome}</h2>
            </div>
            <div className="col-12 col-md-6 text-center order-2 order-md-2 text-center mb-2 mb-md-0">
              <img
                src={produtoSelecionado.imagem}
                alt="colocar equipamento depois"
                className="img-fluid rounded"
                width="400"
              />
            </div>
          </div>
        </section>
        <h2 className="">Descrição</h2>
        <p className="mb-5">{produtoSelecionado.descricao}</p>
        <button className="btn w-50 custom-btn custom-btnprod mb-5">Realizar pedido</button>
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

export default Products;
