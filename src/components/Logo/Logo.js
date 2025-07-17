// componente para a logo do cabeçalho da pagina
import React from 'react';
import './Logo.css';

const Logo = ({ src = "", alt = "Logo_Astem", className = "" }) => {
    return (
        <div className={`logo-astem img-fluid px-3 ${className}`}>
            <a href="/">
                <img src={src} alt={alt} />
            </a>
        </div>
    );
};

export default Logo;