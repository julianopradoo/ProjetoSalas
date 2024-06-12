const con = require('../database/dbConnection');

// Funções CRUD para cadastro
exports.createCadastro = async (cadastroData) => {
    let conn;
    try {
        conn = await con.getConnection();
        const query = `
            INSERT INTO cadastro (
                nome_sala, foto, localizacao, dia, hora_inicio, hora_fim, 
                responsavel, motivo, informacoes, convidados
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            cadastroData.nome_sala, cadastroData.foto, cadastroData.localizacao, 
            cadastroData.dia, cadastroData.hora_inicio, cadastroData.hora_fim, 
            cadastroData.responsavel, cadastroData.motivo, cadastroData.informacoes, 
            cadastroData.convidados
        ];
        const result = await conn.query(query, values);
        
        return { id: result.insertId, ...cadastroData };
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (conn) conn.end();
    }
};

exports.getAllCadastros = async () => {
    let conn;
    try {
        conn = await con.getConnection();
        const query = 'SELECT * FROM cadastro';
        const rows = await conn.query(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (conn) conn.end();
    }
};

exports.getCadastroById = async (cadastroId) => {
    let conn;
    try {
        conn = await con.getConnection();
        const query = 'SELECT * FROM cadastro WHERE id = ?';
        const rows = await conn.query(query, [cadastroId]);
        if (rows.length === 0) {
            throw new Error('Cadastro não encontrado');
        }
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (conn) conn.end();
    }
};

exports.updateCadastroById = async (cadastroId, cadastroData) => {
    let conn;
    try {
        conn = await con.getConnection();
        const query = `
            UPDATE cadastro SET
                nome_sala = ?, foto = ?, localizacao = ?, dia = ?, hora_inicio = ?, 
                hora_fim = ?, responsavel = ?, motivo = ?, informacoes = ?, convidados = ?
            WHERE id = ?
        `;
        const values = [
            cadastroData.nome_sala, cadastroData.foto, cadastroData.localizacao, 
            cadastroData.dia, cadastroData.hora_inicio, cadastroData.hora_fim, 
            cadastroData.responsavel, cadastroData.motivo, cadastroData.informacoes, 
            cadastroData.convidados, cadastroId
        ];
        const result = await conn.query(query, values);
        if (result.affectedRows === 0) {
            throw new Error('Cadastro não encontrado');
        }
        return { message: 'Cadastro atualizado com sucesso' };
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (conn) conn.end();
    }
};

exports.deleteCadastroById = async (cadastroId) => {
    let conn;
    try {
        conn = await con.getConnection();
        const query = 'DELETE FROM cadastro WHERE id = ?';
        const result = await conn.query(query, [cadastroId]);
        if (result.affectedRows === 0) {
            throw new Error('Cadastro não encontrado');
        }
        return { message: 'Cadastro excluído com sucesso' };
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (conn) conn.end();
    }
};
