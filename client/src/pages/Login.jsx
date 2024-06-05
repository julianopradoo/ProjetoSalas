import React, {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {

  const [values, setValues] = useState();
  console.log(values);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Login</h1>

        <input
        type="text"
        name="email"
        placeholder="E-mail"
        className="register--input"
        onChange={handleChangeValues}
        />

        <input
        type="text"
        name="password"
        placeholder="Senha"
        className="register--input"
        onChange={handleChangeValues}
        />

        <button><Link to="/reservas">Entrar</Link></button>
        

      </div>
    </div>
  );
}

export default Login;
