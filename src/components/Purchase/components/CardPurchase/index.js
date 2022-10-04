import React from 'react'
import { BiChevronRight } from "react-icons/bi"

import './style.css'

import Imagem from '../../../../assets/static-1.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/context/AuthContext';

export function CardSearch(props) {
    const { rifaValue, qtd, productArr } = useContext(AuthContext);
    console.log(productArr, rifaValue, qtd);
    const product = {
        id: props?.rifa?.id,
        titulo: props?.rifa?.titulo,
        subtitulo: props?.rifa?.subtitulo,
        imagem: props?.rifa?.imagem,
    }
    return(
        <>
            <div className="card-purchase">
                <div className='card-purchase-overlay'></div>
                <img src={product.imagem} alt="" />
                <div className='card-purchase-item'>
                    <img src={product.imagem} alt="" />
                    <div className='card-purchase-info'>
                        <h2> {product.titulo} </h2>
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