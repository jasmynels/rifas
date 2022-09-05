import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'

import "./style.css"

export function Contact() {

    return (
        <>
            <div className='contact-us'>
                <div className='contact-header'>
                    <h2> <BiMessageDetail /> ENVIE UMA MENSAGEM </h2>
                    <p> Se você ainda tem dúvidas, nos envia uma mensagem, 
                        que responderemos assim que possível. 
                    </p>
                </div>
                <div className='contact-form'>
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <form>
                        <label>
                            seu nome
                            <input type="text" className='input' required/>
                        </label>
                        <label>
                            seu telefone
                            <input type="tel" className='input' required/>
                        </label>
                        <label>
                            sorteio
                            <select name="rifa" id="rifa" class="input" required>
                                <option value="0">Deseja falar sobre um sorteio?</option>
                            </select>
                        </label>
                        <label>
                            assunto
                            <input type="text" className='input' required/>
                        </label>
                        <label>
                            mensagem
                            <textarea type="text" className='input' required> </textarea>
                        </label>
                        <input className='contact-submit' type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
       </>
    );
}

export default Contact