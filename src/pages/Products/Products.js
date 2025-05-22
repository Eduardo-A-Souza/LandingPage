/*
 * Página de detalhes do produto
 * Exibe informações detalhadas de um produto específico com base no ID da URL
 */
import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import { Link } from "react-router-dom"
import "./ProductStyles.css"

function Products() {
  // Obtém o ID do produto da URL
  const { id } = useParams();
  // Busca o produto específico no array de produtos
  const produtoSelecionado = produtos.find(
    (produto) => produto.id === parseInt(id)
  )

  // Se o produto não for encontrado, exibe mensagem de erro
  if (!produtoSelecionado) {
    return <p>este produto não foi encontrado </p>
  }

  return (
    <div className="container-inline custom-container d-flex flex-column justify-content-center align-items-center">
      {/* Cabeçalho - Logo e navegação */}
      <header className="d-flex justify-content-between align-items-center py-4 px-4 custom-topbar w-100">
        <div className="logo-astem img-fluid">
          <a href="/">
            <img src="#" alt="Logo" />
          </a>
        </div>
        {/* Menu de navegação */}
        <nav className="d-flex px-3">
          <a className="btn btn-link custom-btn">teste1</a>
          <a className="btn btn-link custom-btn">teste2</a>
          <a className="btn btn-link custom-btn">teste3</a>
          <a className="btn btn-link custom-btn">teste4</a>
        </nav>
      </header>

      {/* Conteúdo principal - Detalhes do produto */}
      <main className="container-inline text-center my-4 py-4 w-75">
        {/* Seção de título e imagem do produto */}
        <section className="container py-4 mb-4">
          <div className="row align-items-center">
            {/* Título do produto */}
            <div className="col-12 col-md-6 order-1 order-md-1 mb-3 mb-md-0">
              <h2 className="fs-1">{produtoSelecionado.nome}</h2>
            </div>
            {/* Imagem do produto */}
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

        {/* Descrição do produto e botão de pedido */}
        <h2 className="">Descrição</h2>
        <p className="mb-5">{produtoSelecionado.descricao}</p>
        <Link to={`/pedido/${produtoSelecionado.id}`} className="btn w-50 custom-btn custom-btnprod mb-5">
          Realizar pedido
        </Link>
      </main>

      {/* Rodapé - Informações de contato */}
      <footer className="container-fluid py-4 footer-container">
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
    </div>
  );
}

export default Products;
