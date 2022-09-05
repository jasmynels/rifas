import React from 'react'
import Card from '../Card'
import CardPurchase from '../Purchase/components/CardPurchase'

import './style.css'


export function Bounties() {
    return(
        <>
            <section className='bounties'>
                <div className='bounties-header'>
                    <h2> PRÊMIOS ATIVOS </h2>
                    <p> Ainda dá tempo de participar, compre sua cota agora! </p>
                </div>
                <div className='bounties-cards'>
                    <a href='/carrinho'> <Card /> </a>
                    <a href='/carrinho'> <Card /> </a>
                    <a href='/carrinho'> <Card /> </a>
                    <a href='/carrinho'> <Card /> </a>
                </div>

                <div className='bounties-separator'></div>

                <div className='bounties-header'>
                    <h2> PRÊMIOS CONCLUÍDOS </h2>
                    <p> Veja prêmios que já foram sorteados e os ganhadores. </p>
                </div>
                <div className='bounties-cards'>
                    <a href='/compra'> <CardPurchase /> </a>
                    <a href='/compra'> <CardPurchase /> </a>
                    <a href='/compra'> <CardPurchase /> </a>
                    <a href='/compra'> <CardPurchase /> </a>
                </div>
            </section>
        </>
    )
}

export default Bounties