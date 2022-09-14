import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import './style.css';
import { AuthContext } from '../../../../providers/context/AuthContext';
import { useContext } from 'react';

export function CardSearch() {
    const { pedidos } = useContext(AuthContext);
    
    return(
        <>
        {
            pedidos?.map((rifa, index) => {
                return (
                <div key={index} className="card-search">
                <div className='card-search-overlay'></div>
                <img src={rifa.rifa.imagem} alt="" />
                <div className='card-search-item'>
                    <img src={rifa.rifa.imagem} alt="" />
                    <div className='card-search-info'>
                        <p> {rifa.data.substring(0,10)} </p>
                        <h2> {rifa.rifa.titulo} </h2>
                        <p> COMPRA APROVADA </p>
                        <div className='card-search-num'>
                            <span> {rifa.quantidade} </span>
                        </div>
                    </div>
                </div>
                <BiChevronRight size={28} color='#33c44d' />
            </div>
            )
            })
        }
        </>
    )
}

export default CardSearch