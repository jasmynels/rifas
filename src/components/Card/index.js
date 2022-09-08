import React, { useContext} from "react";
import { BiChevronRight } from "react-icons/bi";
import "./style.css";

import { AuthContext } from "../../providers/context/AuthContext";
import { Link } from "react-router-dom";

export function Card() {
  const { productArr } = useContext(AuthContext);

  return (
    <>
      {
      productArr.map((produto) => (
            <div key={produto.id} className="card">
              <div className="card-overlay"></div>
              <img src={produto.imagem} alt="" />
              <div className="card-item">
                <img src={produto.imagem} alt="" />
                <div className="card-info">
                  <h2> {produto.titulo} </h2>
                  <p> {produto.subtitulo} </p>
                  <Link to ="" className="link"> Adquira já </Link>
                </div>
              </div>
              <BiChevronRight size={28} color="#33c44d" />
            </div>
      ))
      }
    </>
  )
}

export default Card;
