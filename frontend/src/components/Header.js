import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#fca311', padding: '1rem', textAlign: 'center' }}>
      <h1>Motoonline DC</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/catalog">Catálogo</Link> | <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
