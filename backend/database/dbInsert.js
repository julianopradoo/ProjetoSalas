const initialInserts = {
    usuario: `
    INSERT INTO cadastro (nome_sala, foto, localizacao, dia, hora_inicio, hora_fim, responsavel, motivo, informacoes, convidados) 
        VALUES (
        "Sala de Jantar", 
        "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Shopping Center",
        "05/05/2024",
        "20:00",
        "23:00",
        "Juliano",
        "Aniversário",
        "Duas pessoas",
        "Laura"
        );
    `

};   

module.exports = initialInserts;