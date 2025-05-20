import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Produtos from './pages/Products/Products.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* rota dinâmica usando id */}
        <Route path='/Produto/:id' element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;
