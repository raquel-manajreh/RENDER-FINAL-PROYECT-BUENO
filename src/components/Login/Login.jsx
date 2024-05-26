import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para autenticar al usuario
    // Por simplicidad, vamos a suponer que el login siempre es exitoso
    setUser({ name: username });
    navigate('/food'); // Navega a la ruta privada '/food' después de iniciar sesión
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

