// componente para a logo do cabeçalho da pagina
import React from 'react';
import './Logo.css';

const Logo = ({ imgSrc = "", alt = "Logo_Astem", className = "", imgClassName = "" }) => {
    return (
        <div className={`logo-astem img-fluid px-3 ${className}`}>
            <a href="/">
                <img src={imgSrc} alt={alt} className={imgClassName} />
            </a>
        </div>
    );
};

export default Logo;