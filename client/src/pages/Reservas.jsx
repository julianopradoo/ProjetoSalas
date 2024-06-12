import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Reservas.css';

const Reservas = () => {
    const [reservas, setReservas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchReservas();
    }, []);

    const fetchReservas = async () => {
        try {
            const res = await axios.get("http://localhost:3000/cadastro");
            setReservas(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (id) => {
        navigate(`/cadastro/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/cadastro/${id}`);
            fetchReservas();
        } catch (err) {
            console.log(err);
        }
    };

    const handleCreate = () => {
        navigate("/cadastro");
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="page-container">
            <header className="header">
                <h1>Reservas de Sala</h1>
                <div className="navigation-buttons">
                    <button className="navButton" onClick={handleCreate}>Criar Reserva</button>
                    <button className="navButton" onClick={handleLogout}>Logout</button>
                </div>
            </header>
            <main className="main-content">
                <section className="cards-container">
                    {reservas.map((reserva) => (
                        <article key={reserva.id} className="Card">
                            <img src={reserva.foto} alt="Imagem da sala" className="Img" />
                            <div>
                                <h1>{reserva.nome_sala}</h1>
                                <h2>{reserva.responsavel}</h2>
                                <h2>{reserva.localizacao}</h2>
                                <span className="info">{reserva.dia}</span>
                                <span className="info">{reserva.hora_inicio}</span>
                                <span className="info">{reserva.hora_fim}</span>
                                <button className="cEditar" onClick={() => handleEdit(reserva.id)}>Editar</button>
                                <button className="cExcluir" onClick={() => handleDelete(reserva.id)}>Excluir</button>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Reservas;
