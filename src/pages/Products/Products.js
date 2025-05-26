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
        <h2 className="">Descrição</h2>
        <p className="mb-5">{produtoSelecionado.descricao}</p>
        <Link to={`/pedido/${produtoSelecionado.id}`} className="btn w-50 custom-btn custom-btnprod mb-5">
          Realizar pedido
        </Link>
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
}

export default Products;
