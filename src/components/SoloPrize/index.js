import React from 'react'
import { FaFacebookSquare, FaTelegramPlane, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import { BiCart, BiTrophy, BiMinusCircle, BiPlusCircle, BiCheckCircle } from 'react-icons/bi'
import MainPrize from '../MainPrize'
import './style.css'

export function SoloPrize() {

    return (
        <>
            <section className='solo-prize'>
                <MainPrize />
                <div className='solo-prize-tag'>
                    <p> POR APENAS <span> R$ 1,00</span> </p>
                </div>
                <div className='solo-prize-description'>
                    <textarea className='input' readonly=''></textarea>
                </div>
                <div className='solo-prize-share'>
                    <div className='solo-prize-date'>
                        <p> <strong> Sorteio: </strong> <span> 22/10/2022 às 18:00 </span> </p>
                    </div>
                    <div className='solo-prize-social'>
                        <a href=''> <FaFacebookSquare size={24} color='#395498'/> </a>
                        <a href=''> <FaTelegramPlane size={24} color='#2FA2DD'/> </a>
                        <a href=''> <FaTwitterSquare size={24} color='#5DA4D7'/> </a>
                        <a href=''> <FaWhatsappSquare size={24} color='#35BD4D'/> </a>
                    </div>
                </div>
                <div className='solo-prize-info'>
                    <h2> Cotas </h2>
                    <p> Escolha sua sorte! </p>
                    <div className='solo-prize-search'>
                        <a href='/busca'> <BiCart size={20}/> Ver meus números </a>
                        <button> <BiTrophy size={20}/> Prêmios </button>
                    </div>
                </div>
                <div className='solo-prize-numbers'>
                    <p> Selecione a quantidade de números </p>
                    <div className='buy'>
                        <button> <h2> +01 </h2> <span> SELECIONAR </span> </button>
                        <button className='popular'> <h2> +02 </h2> <span> SELECIONAR </span> <p> MAIS POPULAR </p></button>
                        <button> <h2> +05 </h2> <span> SELECIONAR </span> </button>
                        <button> <h2> +10 </h2> <span> SELECIONAR </span> </button>
                        <button> <h2> +50 </h2> <span> SELECIONAR </span> </button>
                        <button> <h2> +100 </h2> <span> SELECIONAR </span> </button>
                    </div>
                    <div className='buy-value'>
                        <BiMinusCircle size={32} color='#33C44D'/>
                        <input readOnly='' className='input' value='1' />
                        <BiPlusCircle size={32} color='#33C44D'/> 
                    </div>
                </div>

                <div className='buy-total'>
                    <a href='/compra'> <BiCheckCircle /> Parcitipar do sorteio <span> R$ 1,00 </span></a>
                </div>
            </section>   
       </>
    );
}

export default SoloPrize