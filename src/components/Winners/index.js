import React from 'react'
import CardWinner from './components/CardWinner';

import "./style.css"

export function Winners() {

    return (
        <>
            <section className='winners'>
                <div className='winners-info'>
                    <h1> GANHADORES </h1>
                    <p> Confira os últimos sortudos a ganharem esses prêmios incríveis. </p>

                    <div className='winners-cards'>
                        <CardWinner />
                        <CardWinner />
                        <CardWinner />
                        <CardWinner />
                    </div>
                </div>
            </section>    
       </>
    );
}

export default Winners