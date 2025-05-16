import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'

function Home() {
    return (
        <div className="container-inline">
            <div className="d-flex justify-content-between align-items-center py-4 px-4 custom-topbar w-100">
                <div className="logo-astem">
                    <img src="#"></img>
                </div>
                <div className="d-flex px-3">
                    <a className="btn btn-link custom-btn">teste1</a>
                    <a className="btn btn-link custom-btn">teste2</a>
                    <a className="btn btn-link custom-btn">teste3</a>
                    <a className="btn btn-link custom-btn">teste4</a>
                </div>
            </div>
            <div className="container d-flex justfy-content-between mt-5">
                <div className="main"></div>
                <div className="main"></div>
            </div>
        </div>
    );
}

export default Home;