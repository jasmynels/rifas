import React, { useContext} from "react";
import { BiChevronRight } from "react-icons/bi";
import "./style.css";

import { AuthContext } from "../../providers/context/AuthContext";

export function Card() {
  const { product } = useContext(AuthContext);

  console.log(product)
  

  return (
    <>
      {/* {
      product.map((produto) => (
            <div key={produto.id} className="card">
              <div className="card-overlay"></div>
              <img src={produto.imagem} alt="" />
              <div className="card-item">
                <img src={produto.imagem} alt="" />
                <div className="card-info">
                  <h2> {produto.titulo} </h2>
                  <p> {produto.subtitulo} </p>
                  <span> Adquira já </span>
                </div>
              </div>
              <BiChevronRight size={28} color="#33c44d" />
            </div>
      ))
      } */}
    </>
  )
}

export default Card;
