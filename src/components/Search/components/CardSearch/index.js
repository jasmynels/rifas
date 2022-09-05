import React from 'react'
import { BiChevronRight } from "react-icons/bi"

import './style.css'

import Imagem from '../../../../assets/static-1.jpeg';

export function CardSearch() {
    return(
        <>
            <div className="card-search">
                <div className='card-search-overlay'></div>
                <img src={Imagem} alt="" />
                <div className='card-search-item'>
                    <img src={Imagem} alt="" />
                    <div className='card-search-info'>
                        <p> 22/10/2022 </p>
                        <h2> S-10 LT FLEX MANUAL </h2>
                        <p> COMPRA APROVADA </p>
                        
                        <div className='card-search-num'>
                            <span> 1234 </span> 
                            <span> 2345 </span> 
                            <span> 3456 </span>
                            <span> 4567 </span>
                        </div>
                    </div>
                </div>
                <BiChevronRight size={28} color='#33c44d' />
            </div>
        </>
    )
}

export default CardSearch