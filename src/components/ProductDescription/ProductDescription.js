import React from "react";
import "./ProductDescription.css";

/**
 * Componente para exibir a descrição do produto.
 * Aceita uma prop 'descricao' que pode ser:
 * - Array de strings (tópicos)
 * - String (texto corrido)
 */
const ProductDescription = ({ descricao }) => {
    if (Array.isArray(descricao)) {
        return (
            <ul className="mb-5 mt-2 text-start mx-auto product-description-list" >
                {descricao.map((item, idx) => {
                    const isOpcional = item.toLowerCase().includes('opcional');
                    return (
                        <li key={idx} className="d-flex align-items-start gap-2 product-description-item">
                            <span className="product-description-bullet">
                                {isOpcional ? '◦' : '•'}
                            </span>
                            <span>{item}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }
    // Caso seja string
    return <p className="mb-5 mt-2">{descricao}</p>;
};

export default ProductDescription; 