import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyles.css';

import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import OrderComplete from './pages/OrderComplete/OrderComplete.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* rota dinâmica usando id */}
        <Route path='/Produto/:id' element={<Products />} />
        <Route path="/pedido/:id" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
