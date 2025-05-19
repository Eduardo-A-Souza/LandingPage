import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globalStyles.css';
import './Home.css'

const produtos = [
  { id: 1, nome: "Produto A", preco: "R$ 49,90", imagem: "#" },
  { id: 2, nome: "Produto B", preco: "R$ 69,90", imagem: "#" },
  { id: 3, nome: "Produto C", preco: "R$ 29,90", imagem: "#" },
  { id: 4, nome: "Produto D", preco: "R$ 99,90", imagem: "#" },
  { id: 4, nome: "Produto E", preco: "R$ 59,90", imgaem: "#" },
  { id: 4, nome: "Produto F", preco: "R$ 109,90", imgaem: "#" },
  { id: 4, nome: "Produto G", preco: "R$ 139,90", imgaem: "#" },
  { id: 4, nome: "Produto H", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto I", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto J", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto K", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto L", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto M", preco: "R$ 159,90", imgaem: "#" },
  { id: 4, nome: "Produto N", preco: "R$ 159,90", imgaem: "#" },

  // adicione mais produtos aqui
];

function Home() {
  return (
    <div className="container-inline global-container">
      {/* cabeçalho */}
      <header className="d-flex justify-content-between align-items-center py-4 px-4 custom-topbar">
        <div className="logo-astem">
          <img src="#" alt="Logo" />
        </div>
        <nav className="d-flex px-3">
          <a className="btn btn-link custom-btn">teste1</a>
          <a className="btn btn-link custom-btn">teste2</a>
          <a className="btn btn-link custom-btn">teste3</a>
          <a className="btn btn-link custom-btn">teste4</a>
        </nav>
      </header>

      {/* Layout principal com conteúdo lateral e principal */}
      <main className="container text-center d-flex flex-column justify-content-between align-items-center my-5 main-container p-2">
        <div className="main-banner d-flex my-5">
          <aside className="sidebar me-5 text-center">
            <h2 className="sidebar-title fs-1">Astem</h2>
          </aside>
          <div className="main-container justify-content-center ms-5 me-4">
            <p className="fs-5 mb-0">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Praesentium eaque nulla
              reprehenderit minus veniam quos corporis
              repellat debitis rerum tempore consectetur
              modi quas aliquid natus qui facilis nisi,
              sed in!
            </p>
          </div>
        </div>
        <div className="contianer main-products">
          <div className="row g-4">
            {produtos.map(produto => (
              <div key={produto.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 px-4">
                <div className="card h-100 box-product">
                  <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
                  <div className="card-body">
                    <h5 className="card-title">{produto.nome}</h5>
                    <p className="card-text">{produto.preco}</p>
                    <a href="#" className="btn custom-btn w-100 custom-btn-product">Ver mais</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* final da pagina com as formas de contato com a empresa */}
      <footer className="container-inline footer-container ">
        <ul className="d-flex justify-content-center align-items-center text-center mb-0 pt-3 ">
          <li className="footer-links px-5 pb-0">
            <i className="fab fa-whatsapp fs-4 text-success mb-1" alt="whatssapp icon" />
            <p className="mb-1 fs-4">Whatsapp</p>
            <a className="btn custom-link" href="#" alt="whatsapp number">(61) 9 9999-9999</a>
          </li>
          <li className="footer-links px-5 pb-0">
            <i className="fas fa-envelope fs-4 text-success mb-1" alt="e-mail icon" />
            <p className="mb-1 fs-4">e-mail</p>
            <a className="btn custom-link" href="#" alt="e-mail adress">email@email.com</a>
          </li>
          <li className="footer-links px-5 pb-0 ">
            <i className="fas fa-phone fs-4 text-success mb-1" alt="phone icon" />
            <p className="mb-1 fs-4">telefone</p>
            <a className="btn custom-link" href="#" alt="phone number">(61) 9 9999-9999</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
