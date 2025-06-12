/*
 * Página de detalhes do produto
 * Exibe informações detalhadas de um produto específico com base no ID da URL
 */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import "./ProductStyles.css";

import CustomContainer from "../../components/CustomContainer/CustomContainer.js";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import MainContainer from "../../components/MainContainer/MainContainer.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";
import MainProducts from "../../components/MainProducts/MainProducts.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function Products() {
  // Obtém a categoria da URL
  const { categoria } = useParams();

  // Filtra os produtos pela categoria
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria && produto.categoria.toLowerCase() === categoria.toLowerCase()
  );

  // Se não houver produtos na categoria, exibe mensagem
  if (produtosFiltrados.length === 0) {
    return <p>Nenhum produto encontrado para esta categoria.</p>;
  }

  return (
    <CustomContainer>
      {/* Cabeçalho - Logo e navegação */}
      <HeaderContainer>
        <Logo />
        <NavContainer>
          <NavLink>Inicio</NavLink>
          <NavLink>Produtos</NavLink>
          <NavLink>Sobre</NavLink>
        </NavContainer>
      </HeaderContainer>

      {/* Conteúdo principal */}
      <MainContainer className="flex-fill">
        <h2 className="text-center my-4">Produtos de {categoria}</h2>
        <Sidebar>
          <h1></h1>
        </Sidebar>
        <MainProducts>
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 px-4">
              <Link to={`/pedido/${produto.id}`} className="text-decoration-none">
                <div className="card h-100 box-product custom-card-product">
                  <div className="card-body d-flex flex-column align-items-center">
                    <img
                      src={produto.imagem}
                      className="card-img-top mb-3"
                      alt={produto.nome}
                      style={{ height: "120px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <h5 className="card-title py-2">{produto.nome}</h5>
                  </div>
                </div>
              </Link>
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
          (61) 99223-2377
        </FooterContactItem>
        <FooterContactItem
          iconClass="fas fa-envelope"
          label="E-mail"
          link="#"
        >
          atendimento@astembsb.com
        </FooterContactItem>
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

export default Products;
