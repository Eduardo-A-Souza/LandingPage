import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../../data/DataProducts";

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
        <header className="container d-flex justify-content-around align-items-center py-4 mt-4">
            <h1>{produtoSelecionado.nome}</h1>
            <img 
                src={produtoSelecionado.imagem} 
                alt="colocar equipamento depois" 
                className="img-fluid rounded mx-auto d-block"
                width="400"
            />
        </header>
        <main className="container justfy-content-center align-tiems-center text-center my-4 py-4 w-50">
            <h2>Descrição</h2>
            <p>{produtoSelecionado.descricao}</p>
        </main>
    </div>
    );
}

export default Products;
