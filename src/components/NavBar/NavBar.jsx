import { Link } from 'react-router-dom';

function NavBar({ setNav }) {
  return (
    <nav>
      <h1>Inicia sesión o ¡Regístrate!</h1>
      <ul>
        <li><Link to="/login">Inicia sesión</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/food">Nuestras recetas</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;


