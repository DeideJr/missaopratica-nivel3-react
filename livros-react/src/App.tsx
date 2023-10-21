import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from 'react-router-dom';

import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="dados" className="nav-link">
                Adicionar Livro
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;