/*
 * Página de finalização do pedido
 * Exibe a confirmação do pedido e instruções para finalizar a compra
 */
import React from "react";

import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";
import { Link } from "react-router-dom";

import "../../styles/globalStyles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./OrderComplete.css"

function OrderComplete() {
    // Obtém o ID do produto da URL
    const { id } = useParams();
    // Busca os dados do produto selecionado
    const orderData = produtos.find(
        (produto) => produto.id === parseInt(id)
    )

    return (
        <div className="container-inline custom-container d-flex flex-column justify-content-center align-items-center">
            {/* Cabeçalho - Logo e navegação */}
            <header className="d-flex justify-content-between align-items-center py-4 px-2 px-md-4 custom-topbar w-100">
                <div className="logo-astem img-fluid">
                    <a href="/">
                        <img src="#" alt="Logo" />
                    </a>
                </div>
                {/* Menu de navegação */}
                <nav className="d-flex px-1 px-sm-3">
                    <a className="btn btn-link custom-btn">teste1</a>
                    <a className="btn btn-link custom-btn">teste2</a>
                    <a className="btn btn-link custom-btn">teste3</a>
                    <a className="btn btn-link custom-btn">teste4</a>
                </nav>
            </header>

            {/* Conteúdo principal - Confirmação do pedido */}
            <main className="container-inline d-flex justify-content-center align-items-center text-center my-4 py-4 w-75">
                <section className="container py-4 mb-4 d-flex flex-column align-items-center">
                    {/* Título com nome do produto */}
                    <h1 className="container-title py-4 mb-4">finalizando pedido do produto {orderData.nome}</h1>

                    {/* Imagem do produto */}
                    <div className="col-12 col-md-6 text-center text-center mb-2 mb-md-0">
                        <img
                            src={orderData.imagem}
                            alt={orderData.nome}
                            className="rounded-3 img-fluid shadow-sm"
                            width="400px"
                        />
                    </div>

                    {/* Instruções para finalização */}
                    <p className="container-text py-4 mb-5 text-muted">
                        para finalizar o pedido clique no botão abaixo e envie a mensagem que sera gerada automaticamnte
                    </p>

                    {/* Botão de finalização */}
                    <Link
                        to={`https://wa.me/5561999037164?text=${encodeURIComponent(`Olá! Gostaria de fazer um pedido do produto: ${orderData.nome}`)}`}
                        className="btn w-50 custom-btn custom-btnprod mb-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        finalizar pedido
                    </Link>
                </section>
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

export default OrderComplete; 