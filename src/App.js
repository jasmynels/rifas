import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Contato from "./pages/Contato";
import Ganhadores from "./pages/Ganhadores";
import Cadastro from "./pages/Cadastro";
import Busca from "./pages/Busca";
import Compra from "./pages/Compra";
import Sorteios from "./pages/Sorteios";
import Carrinho from "./pages/Carrinho";
import Sorteio from "./pages/Sorteio";
import Login from "./pages/Login";
import Termos from "./pages/Termos";
import ForgotPass from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />

      <Route path="/contato" exact element={<Contato />} />
      <Route path="/ganhadores" exact element={<Ganhadores />} />
      <Route path="/cadastro" exact element={<Cadastro />} />
      <Route path="/sorteios" exact element={<Sorteios />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/termos" exact element={<Termos />} />
      <Route path="/forgot" element={<ForgotPass />} />
      <Route path="/changepass" element={<ChangePassword />} />
      {/* Rotas com parametros */}
      <Route path="/busca" exact element={<Busca />} />
      <Route path="/compra" exact element={<Compra />} />
      <Route path="/sorteio/:slug/:id" exact element={<Sorteio />} />
      <Route path="/carrinho" exact element={<Carrinho />} />
    </Routes>
  );
}

export default App;
