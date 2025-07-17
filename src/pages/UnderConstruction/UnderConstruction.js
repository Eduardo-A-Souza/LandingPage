import React from "react";

import "./UnderConstructionStyles.css";
import CustomContainer from "../../components/CustomContainer/CustomContainer";
import MainContainer from "../../components/MainContainer/MainContainer";
import Logo from "../../components/Logo/Logo";


function UnderConstruction() {
    return (
        <CustomContainer className="vh-100">
            <Logo
                className="mb-5 h-25 w-50 justify-content-center"
                src="/images/Logo_astem_main.png"
            />
            <MainContainer className="main-custom">
                <h1>Página em desenvolvimento</h1>
            </MainContainer>
        </CustomContainer>
    )
}

export default UnderConstruction 