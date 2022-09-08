import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import Contato from './pages/Contato'
import Ganhadores from './pages/Ganhadores'
import Cadastro from './pages/Cadastro'
import Busca from './pages/Busca'
import Compra from './pages/Compra'
import Sorteios from './pages/Sorteios'
import Carrinho from './pages/Carrinho'
import Sorteio from './pages/Sorteio'
import Login from './pages/Login'
import Termos from './pages/Termos'


function App() {
  	return (
		
			<Routes>
				<Route path="/" exact element={<Index />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/ganhadores" element={<Ganhadores />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/sorteios" element={<Sorteios />} />
				<Route path="/login" element={<Login />} />
				<Route path="/termos" element={<Termos />} />

				{/* Rotas com parametros */}
				<Route path="/busca" element={<Busca />} />
				<Route path="/compra" element={<Compra />} />
				<Route path="/sorteio" element={<Sorteio />} />
				<Route path="/carrinho" element={<Carrinho />} />

			</Routes>
		
  	);
}

export default App;