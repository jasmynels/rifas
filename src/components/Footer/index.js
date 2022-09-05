import React from 'react'
import { BiSearch, BiCategory, BiMoney } from "react-icons/bi";

import "./style.css"

export function Footer() {

    return (
        <>
           <footer>
                <div className='footer-items'>

                    <div className='item'>
                        <div className='item-number'>
                            <h1> 1 </h1>
                        </div>
                        <div className='item-info'>
                            <h2> <BiSearch size={28} /> Escolha o sorteio </h2>
                            <p> Escolha o prêmio que gostaria de concorrer, verifique a descrição, 
                                regulamento do sorteio e fotos em caso de dúvidas entre em 
                                contato com o administrador </p>
                        </div>
                    </div>

                    <div className='item'>
                        <div className='item-number'>
                            <h1> 2 </h1>
                        </div>
                        <div className='item-info'>
                            <h2> <BiCategory size={28} /> Selecione quantos números desejar comprar! </h2>
                            <p> Quanto mais números você comprar, mais chances você tem de ganhar o prêmio
                                está concorrendo. </p>
                        </div>
                    </div>

                    <div className='item'>
                        <div className='item-number'>
                            <h1> 3 </h1>
                        </div>
                        <div className='item-info'>
                            <h2> <BiMoney size={28} /> Faça o pagamento </h2>
                            <p> Faça o pagamento via pix! Copie e cole seu numero e seja aprovado na hora! </p>
                        </div>
                    </div>

                </div>
           </footer>
       </>
    );
}

export default Footer