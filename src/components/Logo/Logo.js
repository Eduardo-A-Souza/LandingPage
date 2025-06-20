// componente para a logo do cabeçalho da pagina
import React from 'react';
import './Logo.css';

const Logo = ({ src = "", alt = "Logo_Astem" }) => {
    return (
        <div className="logo-astem img-fluid px-3">
            <a href="/">
                <img src={src} alt={alt} />
            </a>
        </div>
    );
};

export default Logo;