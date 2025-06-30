import React from "react";

import './AboutStyles.css';

import CustomContainer from "../../components/CustomContainer/CustomContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer.js";
import NavContainer from "../../components/NavContainer/NavContainer.js";
import NavLink from "../../components/NavLink/NavLink.js";
import Logo from "../../components/Logo/Logo.js";
import FooterContainer from "../../components/FooterContainer/FooterContainer.js";
import FooterContactItem from "../../components/FooterContactItem/FooterContactItem.js";
import MainContainer from "../../components/MainContainer/MainContainer";
import HeaderLink from "../../components/HeaderLink/HeaderLink.js";
import FooterLinks from "../../components/FooterLinks/FooterLinks.js";


function About() {
    return (
        <CustomContainer>
            <HeaderContainer>
                <Logo
                    src="/images/Logo_astem_header.jpg"
                    alt="Logo_Astem"
                />
                <HeaderLink />
            </HeaderContainer >
            <MainContainer>

            </MainContainer>
            <FooterLinks />
        </CustomContainer>
    )
}

export default About