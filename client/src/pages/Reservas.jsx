import React, { useState } from 'react';
import './Reservas.css';

const Reservas = () => {
  // Definindo estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
    console.log('Dados do formulário:', { nome, email, mensagem });
  };

  return (
    <div>
    
    <head className="header">
        <h1>Reservas de sala</h1>
        
    </head>
    <body>
        
        <div className="Card">
            <img src="https://fotos.vivadecora.com.br/decoracao-sala-de-estar-studioeloyefreitas-13428-proportional-height_cover_medium.jpg" classname="Img"></img>
            <h1>Nome da sala</h1>
            <h2>responsavel</h2>
            <h2>local</h2>
            <span className="info">data</span>
            <span className="info">hora_inicio</span>
            <span className="info">hora_fim</span>
            <button className="cEditar">Editar</button>
            <button className="cExcluir">Excluir</button>
        </div>

        <div className="Card">
            <img src="https://fotos.vivadecora.com.br/decoracao-sala-de-estar-studioeloyefreitas-13428-proportional-height_cover_medium.jpg" classname="Img"></img>
            <h1>Nome da sala</h1>
            <h2>responsavel</h2>
            <h2>local</h2>
            <span className="info">data</span>
            <span className="info">hora_inicio</span>
            <span className="info">hora_fim</span>
            <button className="cEditar">Editar</button>
            <button className="cExcluir">Excluir</button>
         </div>
    </body>
      

    </div>
  );
};

export default Reservas;