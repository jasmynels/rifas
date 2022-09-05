import React from 'react'
import { 
	BiXCircle,
	BiHomeAlt, 
	BiSpreadsheet, 
	BiListOl, 
	BiUserPlus, 
	BiTrophy, 
	BiWindow, 
	BiMailSend, 
	BiLogInCircle
} from 'react-icons/bi'

import "./style.css"
import Logo from '../../assets/rifa.png'

export function Navbar() {

    return (
        <>
			<section className='nav'>
				<div className='nav-header'>
					<img src={Logo} alt='' />
					<button> <BiXCircle size={24}/> </button>
				</div>
				<div className='nav-links'>
					<a href='/'> <BiHomeAlt size={24}/> Início </a>
					<a href='/sorteios'> <BiSpreadsheet size={24}/> Sorteios </a>
					<a href='/busca'> <BiListOl size={24}/> Meus Números </a>
					<a href='/cadastro'> <BiUserPlus size={24}/> Cadastro </a>
					<a href='/ganhadores'> <BiTrophy size={24}/> Ganhadores </a>
					<a href='/termos'> <BiWindow size={24}/> Termos </a>
					<a href='/contato'> <BiMailSend size={24}/> Contato </a>
					<a href='/login' className='nav-login'> <BiLogInCircle size={24}/> Entrar </a>
				</div>
			</section>
       </>
    );
}

export default Navbar