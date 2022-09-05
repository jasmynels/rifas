import React from 'react'
import './style.css'

import NoUser from '../../../../assets/nouser.jpg'
import Prize from '../../../../assets/static-1.jpeg'


export function CardWinner() {

    return (
        <>
            <div className='card-winner'>
                <div className='card-winner-info'>
                    <img src={NoUser} alt='Foto de perfil'/>
                    <div className='card-winner-name'>
                        <h2> NOME DO GANHADOR </h2>
                        <p> PRÊMIO DO GANHADOR <span> cota <strong> 1287 </strong></span> </p>
                    </div>
                </div>
                <div className='card-winner-prize'>
                    <div className='card-winner-overlay'></div>
                    <img src={Prize} alt='' />
                </div>
            </div>
       </>
    );
}

export default CardWinner