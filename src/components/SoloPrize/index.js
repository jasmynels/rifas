import React, {useState, useEffect, useContext}  from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTelegramPlane, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import { BiTrophy, BiMinusCircle, BiPlusCircle, BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import MainPrize from '../MainPrize'
import './style.css'
import { AuthContext } from '../../providers/context/AuthContext'

// TO DO - submit do form

export function SoloPrize(props) {
    const { onSubmitRifas } = useContext(AuthContext)
    // const {product} = useContext(AuthContext)
    const product = {
        id: props?.rifa?.id,
        titulo: props?.rifa?.titulo,
        subtitulo: props?.rifa?.subtitulo,
        imagem: props?.rifa?.imagem,
    } 

    const [rifaValue, setRifaValue] = useState(0)
    // quantidade comprada
    const [qtd, setQtd] = useState(0)

    function addFirstItem(){
        setRifaValue(rifaValue + 1 * props?.rifa?.valorUnitario)
        setQtd(qtd + 1)
    }

    function addPopularItem(){
        setRifaValue(rifaValue + props?.rifa?.valorPromocional)
        setQtd(qtd + props?.rifa?.quantidadePromocional)
    }

    function addThirdItem(){
        setRifaValue(rifaValue + (props?.rifa?.valorPromocional * 3) * props?.rifa?.valorUnitario)
        setQtd(qtd + props?.rifa?.quantidadePromocional * 3)
    }

    function addFourthItem(){
        setRifaValue(rifaValue + (props?.rifa?.valorPromocional * 4)* props?.rifa?.valorUnitario)
        setQtd(qtd + props?.rifa?.quantidadePromocional * 4)
    }

    function plus(){
        setRifaValue(rifaValue + 1 * props?.rifa?.valorUnitario )
        setQtd(qtd + 1)
    }

    function minus(){
        setRifaValue(rifaValue - 1 * props?.rifa?.valorUnitario)
        setQtd(qtd - 1)

        if(qtd <= 1 || rifaValue <= 1) {
            setRifaValue(0) 
            setQtd(0)
        }
    }

    const removeDecimals = (param) => {
        const newValue = String(param).replace(/\.(.*?\d*)/g, '')
        return +newValue
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('testing');
    };
    
    useEffect(() => {
        if(rifaValue % props?.rifa?.valorPromocional === 0 || qtd > props?.rifa?.quantidadePromocional) {
            let totalQtd = (rifaValue + (rifaValue / props?.rifa?.valorPromocional) * (props?.rifa?.quantidadePromocional - props?.rifa?.valorPromocional))
        
            const newValue = removeDecimals(totalQtd)
            setQtd(newValue)
        }

    }, [props, rifaValue, qtd])

    return(
        <>
            <section className='solo-prize'>
                <MainPrize product={product} />
                <div className='solo-prize-tag'>
                    <p> POR APENAS <span> R$ {props?.rifa?.valorUnitario},00 </span> </p>
                </div>
                <div className='solo-prize-description'>
                    <p className='input' readOnly=''> {props?.rifa?.desc} </p>
                </div>
                <div className='solo-prize-share'>
                    <div className='solo-prize-date'>
                        <p> <strong> Sorteio: </strong> <span> {props?.rifa?.dataSorteio} </span> </p>
                    </div>
                    <div className='solo-prize-social'>
                        <Link to=''> <FaFacebookSquare size={24} color='#395498' /> </Link>
                        <Link to=''> <FaTelegramPlane size={24} color='#2FA2DD' /> </Link>
                        <Link to=''> <FaTwitterSquare size={24} color='#5DA4D7' /> </Link>
                        <Link to=''> <FaWhatsappSquare size={24} color='#35BD4D' /> </Link>
                    </div>
                </div>
                <div className='solo-prize-info'>
                    <h2> Cotas </h2>
                    <p> Escolha sua sorte! </p>
                    {/* <div className='solo-prize-search'>
                        <button> <BiTrophy size={20}/> Prêmios </button>
                    </div> */}
                </div>
                <div className='solo-prize-numbers'>
                    <p> Selecione a quantidade de números </p>
                    <strong> <BiErrorCircle/> Aproveite o valor promocional 
                        e leve: <span>{props?.rifa?.quantidadePromocional} </span> por 
                        <span> R${props?.rifa?.valorPromocional},00 </span>
                    </strong>
                    <div className='buy'>
                        <button onClick={addFirstItem}> 
                            <h2> +01 </h2> 
                            <span> SELECIONAR </span>
                        </button>     
                        <button onClick={addPopularItem} className='popular'> 
                            <h2> +0{props?.rifa?.quantidadePromocional} </h2> 
                            <span> SELECIONAR </span> 
                            <p> MAIS POPULAR </p>
                        </button>
                        <button onClick={addThirdItem}> 
                            <h2> +{props?.rifa?.quantidadePromocional * 3} </h2> 
                            <span> SELECIONAR </span> 
                        </button>
                        <button onClick={addFourthItem}> 
                            <h2> +{props?.rifa?.quantidadePromocional * 4} </h2> 
                            <span> SELECIONAR </span> 
                        </button>
                        {/* <button> <h2> +50 </h2> <span> SELECIONAR </span> </button>
                        <button> <h2> +100 </h2> <span> SELECIONAR </span> </button> */}
                        {/* <p> Você está levando <b> {qtd} </b> cotas para concorrer ao prêmio! </p> */}
                    </div>
                    <div className='buy-value'>
                        <BiMinusCircle size={32} color='#33C44D' onClick={minus}></BiMinusCircle>
                        <input readOnly='' className='input' value={qtd} />
                        <BiPlusCircle size={32} color='#33C44D'  onClick={plus}/> 
                    </div>
                </div>

                <div className='buy-total'>
                    <form onSubmit={handleSubmit}>
                        <input type='hidden' className='input' value={qtd} />
                        <input type='hidden' className='input' value={rifaValue} />
                        <button> <BiCheckCircle /> Parcitipar do sorteio <span> R${rifaValue},00 </span></button>
                    </form>
                </div>
            </section>   
       </>
    );
}

export default SoloPrize