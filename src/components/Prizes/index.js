import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainPrize from '../MainPrize'
import Card from '../Card'
import { AuthContext } from '../../providers/context/AuthContext'

import './style.css'



export function Prizes() {
    const {product, productArr} = useContext(AuthContext)

    // const data = [
    //     {
    //         id: '2',
    //         titulo: '1234',
    //         subtitulo: 'O senhor dos aneis',
    //         imagem: 'https://rifasbrasil.s3.amazonaws.com/rifas/1662082478_eeb84de76084f4ef08f5e184909eb55c.jpg'
    //     }, 
    //     {
    //         id: '3',
    //         titulo: '1asduqhwe',
    //         subtitulo: 'o iluminado',
    //         imagem: 'https://rifasbrasil.s3.amazonaws.com/rifas/1662082478_eeb84de76084f4ef08f5e184909eb55c.jpg'
    //     },
    //     {
    //         id: '4',
    //         titulo: 'qoeaopdadainealedaniela',
    //         subtitulo: 'lorem ipsum',
    //         imagem: 'https://rifasbrasil.s3.amazonaws.com/rifas/1662082478_eeb84de76084f4ef08f5e184909eb55c.jpg'
    //     },
    //     {
    //         id: '5',
    //         titulo: 'qeowieqoowie',
    //         subtitulo: 'dolor sit amet',
    //         imagem: 'https://rifasbrasil.s3.amazonaws.com/rifas/1662082478_eeb84de76084f4ef08f5e184909eb55c.jpg'
    //     }

    // ]

    return(
        <>
            <section className='prize'>
                <h1> PRÊMIOS </h1>
                <p> Escolha um prêmio, compre fichas. Quanto mais você comprar, mais chances de ganhar! </p>
                <div className='prizes'>
                    <Link to={`/sorteio/${product.titulo}/${product.id}`}>
                        <MainPrize product={product} />
                    </Link>
                    <div className='side-prize'>
                        { productArr.slice(0,3).map((rifa) => (
                            <Link to={`/sorteio/${rifa.titulo}/${rifa.id}`} key={rifa.id}> 
                                <Card {...rifa} /> 
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div className='prizes-info'>
                <Link to="/sorteios"> VER TODAS </Link>
                <div className='faq'>
                    <Link to="/contato">
                        <h2> Dúvidas? </h2>
                        <p> Tire suas dúvidas em nossa seção de perguntas frequentes, 
                            ou entre em contato, clicando aqui. 
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Prizes