import React from 'react'
import { BiCart } from 'react-icons/bi'

import CardSearch from './components/CardSearch';

import "./style.css"

export function Search() {

    return (
        <>
            <section className='search'>
                <h2> <BiCart size={27}/> BUSCAR MEUS NÚMEROS </h2>
                <p> Digite seu número de telefone para buscar os números que você comprou</p>
                <div className='search-form'>
                    <form>
                        <label>
                            número de telefone
                            <input type="search" className='input' id='num' required/>
                        </label>                         
                        <input className='search-submit' type="submit" value="Buscar" />
                    </form>
                </div>

                <div className='search-results'>
                    <a href=''> <CardSearch /> </a>
                    <a href=''> <CardSearch /> </a>
                    <a href=''> <CardSearch /> </a>
                    <a href=''> <CardSearch /> </a>
                    <a href=''> <CardSearch /> </a>
                </div>
            </section>   
       </>
    );
}

export default Search