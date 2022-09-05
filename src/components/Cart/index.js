import React from 'react'
import { BiCart, BiUserPin, BiCaretRightCircle } from "react-icons/bi"

import './style.css'

import NoUser from '../../assets/nouser.jpg'


export function Cart() {
    return(
        <>
            <div className='cart'>
                <div className='cart-header'>
                    <h2> <BiCart size={24}/> CHECKOUT </h2>
                    <p> Você está adquirindo <span> <strong> 2 </strong> cota(s) </span> do prêmio 
                        <span> <strong> GOLF TSI 1.4 TURBO 2019 </strong></span> por <span> <strong>R$ 3 </strong></span>.
                        Você terá acesso à compra, assim que comprovar o pagamento e sua compra ser aprovada! 
                    </p>
                </div>

                <div className='cart-user'>
                    <h2> <BiUserPin /> SEUS DADOS DE USUÁRIO: </h2>
                    <div className='cart-user-card'>
                        <img src={NoUser} alt='' />
                        <div className='cart-user-info'>
                            <p> Nome do Usuário </p>
                            <span> (99) 99999-9999</span>
                        </div>
                    </div>
                </div>

                <div className='cart-checkout'>
                    <a href='/compra'> Efetuar o pagamento <BiCaretRightCircle size={20}/> </a>
                </div>
            </div>
        </>
    )
}

export default Cart