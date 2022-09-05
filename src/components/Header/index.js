import React from 'react'
import { BiCart, BiMenuAltRight } from "react-icons/bi"
import Navbar from '../Navbar'

import Logo from '../../assets/rifa.png'
import './style.css'

export function Header() {
    return(
        <>  
            {/* <Navbar /> */}
            <header>
                <a href='/'><img src={Logo} alt='Imagem do logo' /></a>
                <div className='buttons'> 
                    <a href='/busca'> <BiCart size={24}/> </a>
                    <button><BiMenuAltRight size={24}/></button>
                </div>
            </header>
        </>
    )
}

export default Header