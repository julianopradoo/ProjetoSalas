const createTableQueries = {
     cadastros : `
     CREATE TABLE cadastro (
        id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nome_sala VARCHAR(256) NOT NULL,
        foto VARCHAR(512) NOT NULL,
        localizacao VARCHAR(256) NOT NULL,
        dia VARCHAR(256) NOT NULL,
        hora_inicio VARCHAR(256) NOT NULL,
        hora_fim VARCHAR(256) NOT NULL,
        responsavel VARCHAR(256) NOT NULL,
        motivo VARCHAR(256) ,
        informacoes VARCHAR(256) ,
        convidados VARCHAR(512) 
    );
    `
};

module.exports = createTableQueries;
