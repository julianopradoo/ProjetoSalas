import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const n = useNavigate();
  const [valuesUserName, setValuesUserName] = useState('');
  const [valuesPassword, setValuesPassword] = useState('');

  console.log(valuesUserName);
  console.log(valuesPassword);

  const handleChangeValuesUsername = (event) => {
    setValuesUserName(event.target.value);
  };

  const handleChangeValuesPassword = (event) => {
    setValuesPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log('valuesUserName', valuesUserName, 'valuesPassword', valuesPassword);

    if (valuesUserName === 'admin' && valuesPassword === 'admin') {
      console.log('Validei');
      n('/reservas');
    } else {
      console.log('Erro ao efetuar login');
    }
  };

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Login</h1>

        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="register--input"
          onChange={handleChangeValuesUsername}
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="register--input"
          onChange={handleChangeValuesPassword}
        />

        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;