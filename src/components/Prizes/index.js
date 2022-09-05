import React from 'react'
import MainPrize from '../MainPrize'
import Card from '../Card'

import './style.css'


export function Prizes() {
    return(
        <>
            <section className='prize'>
                <h1> PRÊMIOS </h1>
                <p> Escolha um prêmio, compre fichas. Quanto mais você comprar, mais chances de ganhar! </p>
                <div className='prizes'>

                    
                    <a href="">
                        <MainPrize />
                    </a>

                    <div className='side-prize'>
                        <a href=""> <Card /> </a>
                        <a href=""> <Card /> </a>
                        <a href=""> <Card /> </a>
                    </div>
                </div>
            </section>
            <div className='prizes-info'>
                <a href=""> VER TODAS </a>
                <div className='faq'>
                    <a href="/contato">
                        <h2> Dúvidas? </h2>
                        <p> Tire suas dúvidas em nossa seção de perguntas frequentes, 
                            ou entre em contato, clicando aqui. 
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Prizes