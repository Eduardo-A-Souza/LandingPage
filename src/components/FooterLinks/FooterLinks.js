// componente dos links do footer

import React from "react";
import './FooterLinks.css';

import FooterContainer from "../FooterContainer/FooterContainer.js";
import FooterContactItem from "../FooterContactItem/FooterContactItem.js";

const FooterLinks = () => {
    return (
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
    )
}

export default FooterLinks;