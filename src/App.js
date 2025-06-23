import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/globalStyles.css';

import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import ProductDetails from './pages/ProductDetails/ProductDetails.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* rota dinâmica para produtos por categoria */}
        <Route path="/produtos/:categoria" element={<Products />} />
        <Route path="/pedido/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
