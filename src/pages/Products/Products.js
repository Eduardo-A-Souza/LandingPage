/*
 * Página de detalhes do produto
 * Exibe informações detalhadas de um produto específico com base no ID da URL
 */
import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import { Link } from "react-router-dom"
import "./ProductStyles.css"

import CustomContainer from "../../components/CustomContainer/CustomContainer.js";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import MainContainer from "../../components/MainContainer/MainContainer.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";
import MainBanner from "../../components/MainBanner/MainBanner.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import HeroSection from "../../components/HeroSection/HeroSection.js";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductOrderPanel from "../../components/ProductOrderPanel/ProductOrderPanel";

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

      {/* Conteúdo principal - Detalhes do produto */}
      <MainContainer>
        {/* Seção de título e imagem do produto */}
        <MainBanner>
          {/* Título do produto */}
          <Sidebar>
            <h2 className="fs-1">{produtoSelecionado.nome}</h2>
          </Sidebar>
          {/* Imagem do produto */}
          <HeroSection>
            <img
              src={produtoSelecionado.imagem}
              alt="colocar equipamento depois"
              className="img-fluid rounded"
              width="400"
            />
          </HeroSection>
        </MainBanner>

        {/* Descrição do produto e botão de pedido */}
        <ProductOrderPanel>
          <div className="w-100 w-md-50">
            <h2 className="my-5">Descrição</h2>
            <ProductDescription descricao={produtoSelecionado.descricao} />
          </div>
          <div className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="form-control mb-4"
              style={{ maxWidth: 120 }}
              aria-label="Quantidade"
            />
            <Link to={`/pedido/${produtoSelecionado.id}`} className="btn custom-btn custom-btnprod">
              Realizar pedido
            </Link>
          </div>
        </ProductOrderPanel>
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
    </CustomContainer>
  );
}

export default Products;
