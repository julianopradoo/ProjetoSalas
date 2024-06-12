import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reservas from "./pages/Reservas";
import Cadastro from "./pages/Cadastro";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/:id" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
