import React from 'react'

import "./style.css"

export function Questions() {

    return (
        <>
            <section className='questions'>
                <h2>PERGUNTAS FREQUENTES</h2> 
                <label class="task-collapse">
                    <input type="checkbox" class="toggle-collapse" />
                    <div class="heading">Como acesso minhas compras? </div>
                    <div class="collapse">
                        <div class="content">
                            Existem duas formas de você conseguir acessar suas compras, a primeira 
                            é logando no site, abrindo o menu do site e clicando em "Entrar" e a 
                            segunda forma é visitando o sorteio e clicando em "Compras" logo a 
                            baixo do nome "Cotas".
                        </div>        
                    </div>
                </label>

                <label class="task-collapse">
                    <input type="checkbox" class="toggle-collapse" />
                    <div class="heading"> Como envio o comprovante? </div>
                    <div class="collapse">
                    <div class="content">
                        Caso você tenha feito o pagamento via Pix QR Code ou copiando o código, 
                        não é necessário enviar o comprovante, aguardando até 5 minutos após o 
                        pagamento, o sistema irá dar baixa automaticamente, para mais dúvidas 
                        entre em contato conosco <a href='/contato'> clicando aqui.</a>
                    </div>
                    </div>
                </label>

                <label class="task-collapse">
                    <input type="checkbox" class="toggle-collapse" />
                    <div class="heading">Como recuperar minha senha? </div>
                    <div class="collapse">
                    <div class="content">
                        Você consegue recuperar sua senha indo no menu do site, depois em 
                        "Entrar" e logo a baixo tem "Esqueci minha senha" ou 
                        <a href='/recuperar-senha'> clicando aqui </a>.
                    </div>
                    </div>
                </label>
            </section>   
       </>
    );
}

export default Questions