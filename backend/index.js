import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec",
    database: "projeto100"
})

//Caso haja algum problema de autenticação
//ALTER USE 'root'@'localhost' INDENTIFIED WITH mysql_native_password BY 'fatec';

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello, esse é o backend")
})

app.get("/cadastro", (req, res) => {
    const q = "SELECT * FROM cadastro"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/cadastro", (req, res)=> {
    const q = "INSERT INTO cadastro ( `nome`, `local`, `data`, `hora_inicio`, `hora_fim`, `responsavel`, `motivo`, `informacoes`, `convidados`) VAUES (?)"
    const values = [
        req.body.nome,
        req.body.local,
        req.body.data,
        req.body.hora_inicio,
        req.body.hora_fim,
        req.body.responsavel,
        req.body.motivo,
        req.body.informacoes,
        req.body.convidados
    ];

    db.query(q,[values], (err, data)=> {
        if(err) return res.json(err);
        return res.json("cadastro foi criado com sucesso");
    })
})

app.delete("/cadastro:id", (req, res) => {
    const cadastroId = req.params.id;
    const q = "DELETE FROM cadastro WHERE id = ?";
    
    db.query(q, [cadastroId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Cadastro deletado com sucesso.")
    });
});

app.listen(8800, () => {
    console.log("Conectado ao backend")
})

