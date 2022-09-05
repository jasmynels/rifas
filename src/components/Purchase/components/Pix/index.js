import React, { Component } from 'react'
import { BiQr, BiCopy, BiInfoCircle, BiCheckDouble } from "react-icons/bi"

import './style.css'

import Qr from '../../../../assets/qr.jpg';
import Countdown from '../Countdown';

export function Pix() {
    return(
        <>
            <div className='purchase-pay'>
                <p> <BiQr /> Pix copia e cola: abra o aplicativo do seu banco no celular, 
                    selecione a opção PIX e faça o pagamento. Ou escaneie o código
                    com um celular.
                </p>
                <div className='purchase-pix'>
                    <img src={Qr} alt='' />
                    <p> Copie o código do PIX e cole no aplicativo do seu banco 
                        para efetuar o pagamento. 
                    </p> 
                    <div className='purchase-copy'>
                        <input type='text' class='input' readonly='' 
                            value='00012930129301230123910 asdaohouahoudhasdk jnpoi1h0481023u0182u380hasdha hn asdhaos dy8104y hasd aosd y891346y8901y40128341273'
                        />
                        <button> <BiCopy size={20} /> </button>
                    </div>
                    <span> <BiInfoCircle size={14}/> Após o pagamento aguarde até 5 minutos para a 
                        confirmação, caso já tenha efetuado o pagamento, clique no botão <strong> 
                        Já fiz o pagamento </strong>. 
                    </span>
                    <a href='/'> <BiCheckDouble /> Já fiz o pagamento </a>
                </div>

                <div className='purchase-time'>
                    <p> O tempo para você pagar acaba em: </p>
                    <div className='purchase-countdown'>
                        <Countdown />
                        <div className='countdown-bar'>
                            <div className='progress-bar'></div>
                        </div>
                    </div>
                    <span> Este pagamento só pode ser realizado dentro do tempo, após este período,
                        caso o pagamento não ter sido confirmado, os números voltam a ficar disponíveis.
                    </span>
                </div>
            </div>
        </>
    )
}

export default Pix