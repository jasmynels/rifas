import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import api from "../../services/axios";

import Header from '../../components/Header'
import SoloPrize from '../../components/SoloPrize'
import Footer from '../../components/Footer'

export default function Sorteios() { 
  let {id} = useParams()
  const [rifa, setRifa] = useState()

  const fetchData = useCallback(async() => {
    const response = await fetch(`https://develop.pvrcino.codes/api/rifas/${id}`)
    const data = await response.json()
    if( data ){
      setRifa(data ?? {rifa:{
        id: '', 
        titulo: '',
        subtitulo: '',
        imagem: ''
      }})
    }
  }, [id])

  useEffect(() => {
    // api.get(`/rifas/${id}`).then(({ data }) => setRifa(data))
    fetchData()
  }, [fetchData])

  return (
    <div>
      <Header />
      <SoloPrize {...rifa} />
      <Footer />
    </div>
  );
}
