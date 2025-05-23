import React from 'react';
import './Logo.css';

const Logo = ({ src = "#", alt = "Logo" }) => {
    return (
        <div className="logo-astem img-fluid">
            <a href="/">
                <img src={src} alt={alt} />
            </a>
        </div>
    );
};

export default Logo; 