import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Cadastro = () => {
    const [cadastro, setCadastro] = useState({
        nome_sala: "",
        foto: "",
        localizacao: "",
        dia: "",
        hora_inicio: "",
        hora_fim: "",
        responsavel: "",
        motivo: "",
        informacoes: "",
        convidados: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchCadastroById(id);
        }
    }, [id]);

    const fetchCadastroById = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/cadastro/${id}`);
            setCadastro(res.data);
            setIsEditing(true);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setCadastro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError(""); // Clear the error message when user starts typing
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (Object.values(cadastro).some(value => value === "")) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        try {
            await axios.post("http://localhost:3000/cadastro", cadastro);
            alert("Cadastro criado com sucesso!");
            navigate("/reservas");
        } catch (err) {
            console.log(err);
            alert("Erro ao criar cadastro.");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (Object.values(cadastro).some(value => value === "")) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        try {
            await axios.put(`http://localhost:3000/cadastro/${id}`, cadastro);
            alert("Cadastro atualizado com sucesso!");
            navigate("/reservas");
        } catch (err) {
            console.log(err);
            alert("Erro ao atualizar cadastro.");
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/cadastro/${id}`);
            alert("Cadastro excluído com sucesso!");
            navigate("/reservas");
        } catch (err) {
            console.log(err);
            alert("Erro ao excluir cadastro.");
        }
    };

    const handleCancel = () => {
        setCadastro({
            nome_sala: "",
            foto: "",
            localizacao: "",
            dia: "",
            hora_inicio: "",
            hora_fim: "",
            responsavel: "",
            motivo: "",
            informacoes: "",
            convidados: "",
        });
        setIsEditing(false);
        setError("");
        navigate("/reservas");
    };

    return (
        <div className="form">
            <h1>{isEditing ? "Editar Reserva" : "Nova Reserva"}</h1>
            <input type="text" placeholder="Nome da Sala" onChange={handleChange} name="nome_sala" value={cadastro.nome_sala} />
            <input type="text" placeholder="Link da imagem" onChange={handleChange} name="foto" value={cadastro.foto} />
            <input type="text" placeholder="Local" onChange={handleChange} name="localizacao" value={cadastro.localizacao} />
            <input type="text" placeholder="Data" onChange={handleChange} name="dia" value={cadastro.dia} />
            <input type="text" placeholder="Hora de inicio" onChange={handleChange} name="hora_inicio" value={cadastro.hora_inicio} />
            <input type="text" placeholder="Hora do fim" onChange={handleChange} name="hora_fim" value={cadastro.hora_fim} />
            <input type="text" placeholder="Responsável" onChange={handleChange} name="responsavel" value={cadastro.responsavel} />
            <input type="text" placeholder="Motivo" onChange={handleChange} name="motivo" value={cadastro.motivo} />
            <input type="text" placeholder="Informações" onChange={handleChange} name="informacoes" value={cadastro.informacoes} />
            <input type="text" placeholder="Convidados" onChange={handleChange} name="convidados" value={cadastro.convidados} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="buttons">
                {!isEditing && <button className="formButton" onClick={handleCreate}>Salvar</button>}
                {isEditing && (
                    <>
                        <button className="formButton" onClick={handleUpdate}>Salvar</button>
                        <button className="formButton" onClick={handleDelete}>Excluir</button>
                        <button className="formButton" onClick={handleCancel}>Cancelar</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cadastro;
