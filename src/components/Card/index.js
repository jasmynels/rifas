import React from "react";
import { BiChevronRight } from "react-icons/bi";
import "./style.css";

export function Card({ id, titulo, subtitulo, imagem }) {
  // console.log(props)

  return (
    <div className="card">
      <div className="card-overlay"></div>
      <img src={imagem} alt="" />
      <div className="card-item">
        <img src={imagem} alt="" />
        <div className="card-info">
          <h2> {titulo} </h2>
          <p> {subtitulo} </p>
          <span className="link"> Adquira já </span>
        </div>
      </div>
      <BiChevronRight size={28} color="#33c44d" />
    </div>
  );
}

export default Card;
