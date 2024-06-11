import express from "express"
import cors from "cors"
//Importações necessárias para o projeto


const app = express()
//Express é um framework web para node.js. Ele oferece recursos que facilitam o desenvolvimento web.
//const - cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura
// const app = express() : A instância do aplicativo Express é armazenada na constante app.
// A constante app será usada para configurar as rotas, middlewares e outras funcionalidades do seu aplicativo Express.
// BUGA HUGA : A variavel de valor fixo chamada app equivale a express()



app.use(express.json())
app.use(cors())
//json e cors são middlewares
//Middleware é o nome dado ao software ou serviço de nuvem que fornecem funcionalidades e recursos a aplicações e ajudam desenvolvedores e operadores a criar e implantar aplicações com mais eficiência. 
//O middleware tem o papel de conectar apps, dados e usuários.
//O JSON é um formato de dados leve e de fácil leitura utilizado para troca de informações entre sistemas computacionais
//CORS é um mecanismo de segurança do navegador que restringe solicitações HTTP entre diferentes origens.
//Quando você usa app.use(cors()), o Express configura automaticamente os cabeçalhos CORS nas respostas HTTP, permitindo que o servidor responda a solicitações de qualquer origem.
//Em Express.js, app.use() é um método usado para registrar middlewares no aplicativo Express.
//Essas duas linhas de código registram middlewares no aplicativo express
//BUGA HUGA: "express use o cors e o json"

app.get("/", (req, res) => {
    res.json("Hello, esse é o backend")
})
//app.get("/"): Aqui estamos definindo uma rota para a URL raiz do aplicativo
// ou seja, quando alguém faz uma solicitação para o endereço base do seu servidor, como http://localhost:8800/
// (req, res) => { ... }: Em Express.js, req e res são abreviações comumente usadas para os objetos de solicitação (request) e resposta (response), respectivamente.
// Eles representam os dados e métodos associados a uma solicitação HTTP específica que chega ao servidor e a resposta que será enviada de volta ao cliente.
// req e res permitem que o desenvolvedor manipule os dados da requisição e mande resposta de volta ao cliente
//BUGA HUGA "Express, quando alguem solicitar o endereço HTTP "/", chame os metodos req e res. mande como resposta um texto em json escrito "bem vindo ao backend""
//Isso é útil para testar se o servidor está funcionando corretamente e para fornecer uma mensagem inicial para os clientes que acessam seu aplicativo.
//get é o metodo pegar


app.listen(8800, () => {
    console.log("Conectado ao backend")
})

