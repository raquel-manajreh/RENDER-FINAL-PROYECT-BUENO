import { Link } from 'react-router-dom';

function NavBar({ setNav }) {
  return (
    <nav>
      <h1>Inicia sesión o ¡Regístrate!</h1>
      <ul>
        <button><Link to="/login">Inicia sesión</Link></button>
        <button><Link to="/register">Registro</Link></button>
      </ul>
    </nav>
  );
}

export default NavBar;
