import React from "react"
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Cadastro = () => {
    
    const [cadastro, setCadastro] = useState({
        nome_sala:"",
        foto:"",
        localizacao:"",
        dia:"",
        hora_inicio:"",
        hora_fim:"",
        responsavel:"",
        motivo:"",
        informacoes:"",
        convidados:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCadastro((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/cadastro", cadastro)
            navigate("/reservas")
        }catch(err){
            console.log(err)
        }
    }

    console.log(cadastro);

    return (
        <div className= "form"> 
            <h1>Adicionar Nova Reserva</h1>
            <input type="text" Placeholder="Nome da Sala" onChange={handleChange} name="nome"/>
            <input type="text" Placeholder="Local" onChange={handleChange} name="local"/>
            <input type="text" Placeholder="Data" onChange={handleChange} name="data"/>
            <input type="text" Placeholder="Hora de inicio" onChange={handleChange} name="hora_inicio"/>
            <input type="text" Placeholder="Hora do fim" onChange={handleChange} name="hora_fim"/>
            <input type="text" Placeholder="Responsável" onChange={handleChange} name="responsavel"/>
            <input type="text" Placeholder="Motivo" onChange={handleChange} name="motivo"/>
            <input type="text" Placeholder="Informações" onChange={handleChange} name="informacoes"/>
            <input type="text" Placeholder="Convidados" onChange={handleChange} name="convidados"/>
            <button className="formButton" onClick={handleClick}>Cadastrar</button>
        </div>

    )
}

export default Cadastro