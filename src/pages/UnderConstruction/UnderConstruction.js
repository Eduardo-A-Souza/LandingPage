import React from "react";

import "./UnderConstructionStyles.css";
import CustomContainer from "../../components/CustomContainer/CustomContainer";
import MainContainer from "../../components/MainContainer/MainContainer";
import Logo from "../../components/Logo/Logo";


function UnderConstruction() {
    return (
        <CustomContainer className="vh-100">
            <Logo
                className="mb-5 justify-content-center"
                imgSrc="/images/Logo_astem_main.png"
                imgClassName="logo-custom"
            />
            <MainContainer className="main-custom w-50">
                <h1>Página em desenvolvimento</h1>
            </MainContainer>
        </CustomContainer>
    )
}

export default UnderConstruction 