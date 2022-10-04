import React from 'react'
import { BiCheckCircle, BiInfoCircle } from 'react-icons/bi'
import Pix from './components/Pix'
import CardPurchase from './components/CardPurchase'

import './style.css'
import { useContext } from 'react'
import { AuthContext } from '../../providers/context/AuthContext'


export function Prizes() {

    const { rifaValue, qtd, productArr, usuario } = useContext(AuthContext);
    return(
        <>
            <section className='purchase'>
                {/* <div className='purchase-header'>
                    <BiCheckCircle size={48} />
                    <div className='purchase-title'>
                        <h2> COMPRA APROVADA </h2>
                        <p> Agora é só torcer! </p>
                    </div>
                </div> */}

                <div className='purchase-header'>
                    <BiCheckCircle size={48} />
                    <div className='purchase-title'>
                        <h2> AGUARDANDO PAGAMENTO </h2>
                        <p> Finalize o pagamento para participar! </p>
                    </div>
                </div>

                {/* Condição para aparecer se o status do pagamento for 'aguardando' */}
                <Pix />

                <div className='purchase-item'>
                    <CardPurchase />
                </div>

                <div className='purchase-details'>
                    <h2> <BiInfoCircle size={20} /> Informações da sua compra </h2>

                    <div className='purchase-details-user'>
                        <p> <strong> Comprador: </strong> <span> {usuario.name} </span> </p>
                        <p> <strong> CPF: </strong> <span> {usuario.cpf} </span> </p>
                        <p> <strong> Telefone: </strong> <span> {usuario.phone} </span> </p>
                        <p> <strong> Data: </strong> <span> 22/10/2022 </span> </p>
                        <p> <strong> Status: </strong> <span> Compra aprovada </span> </p>
                        <p> <strong> Total: </strong> <span> R$ 2.40 </span> </p>
                        <p> <strong> Cotas: </strong> <span> 1234, 2345, 3456, 4567 </span> </p>
                    </div>
                </div>

                <div className='purchase-problem'>
                    <p> Houve um problema com a sua compra? <a href='/contato'> Clique aqui </a></p>
                </div>
            </section>
            
        </>
    )
}

export default Prizes