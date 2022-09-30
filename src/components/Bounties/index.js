import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/context/AuthContext'
import Card from '../Card'
import CardPurchase from '../Purchase/components/CardPurchase'

import './style.css'


export function Bounties() {
    const {productArr} = useContext(AuthContext)

    return(
        <>
            <section className='bounties'>
                <div className='bounties-header'>
                    <h2> PRÊMIOS ATIVOS </h2>
                    <p> Ainda dá tempo de participar, compre sua cota agora! </p>
                </div>
                <div className='bounties-cards'>
                    { productArr.slice(0,4).map((rifa) => (
                        <Link to={`/sorteio/${rifa.titulo}/${rifa.id}`} key={rifa.id}> 
                            <Card {...rifa} /> 
                        </Link>
                    ))}
                </div>

                <div className='bounties-separator'></div>

                <div className='bounties-header'>
                    <h2> PRÊMIOS CONCLUÍDOS </h2>
                    <p> Veja prêmios que já foram sorteados e os ganhadores. </p>
                </div>
                <div className='bounties-cards'>
                    { productArr.slice(0,4).map((rifa) => (
                        <Link to={`/sorteio/${rifa.titulo}/${rifa.id}`} key={rifa.id}> 
                            <Card {...rifa} /> 
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Bounties