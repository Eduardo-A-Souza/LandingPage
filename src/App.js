import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/globalStyles.css';

import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import ProductDetails from './pages/ProductDetails/ProductDetails.js';
import About from './pages/About/About.js';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        {/* rota dinâmica para produtos por categoria */}
        <Route path="/produtos/:categoria" element={<Products />} />
        <Route path="/pedido/:id" element={<ProductDetails />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
