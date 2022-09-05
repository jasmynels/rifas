import React from 'react'
import { BiChevronRight } from "react-icons/bi"

import './style.css'

import Imagem from '../../../../assets/static-1.jpeg';

export function CardSearch() {
    return(
        <>
            <div className="card-purchase">
                <div className='card-purchase-overlay'></div>
                <img src={Imagem} alt="" />
                <div className='card-purchase-item'>
                    <img src={Imagem} alt="" />
                    <div className='card-purchase-info'>
                        <h2> S-10 LT FLEX MANUAL </h2>
                        <p> 3 PREMIAÇÕES </p>
                        <span> concluído </span>
                    </div>
                </div>
                <BiChevronRight size={28} color='#33c44d' />
            </div>
        </>
    )
}

export default CardSearch