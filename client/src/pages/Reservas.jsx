import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'


const Reservas = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchAllReservas = async () => {
            try{
                const res = await axios.get ("http://localhost:8800/cadastro")
                setReservas(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchAllReservas();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/cadastro" + id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return  (
        <div>
            <h1>Reservas de Sala</h1>
            <button><Link to="/cadastro">Adicionar reserva</Link></button>
            <div className="reservas">
                {reservas.map((reservas) => (
                    <div classname="reserva" key={reservas.id}>
                        {reservas.cover && <img src={reservas.cover} alt="" />}
                        <h2>{reservas.nome}</h2>
                        <p>Local: {reservas.local}</p>
                        <p>Data: {reservas.data}</p>
                        <p>Inicio: {reservas.hora_inicio}</p>
                        <p>Fim: {reservas.hora_fim}</p>
                        <p>Responsável: {reservas.responsavel}</p>
                        <button className="delete" onClick={() => handleDelete(reservas.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${reservas.id}`}>Update</Link></button>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Reservas;