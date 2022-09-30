import React from "react";
import "./style.css";

export function Prizes({product}) {
  return (    
    <div className="main-prize">
      <div className="main-prize-overlay"></div>
      <img src={product.imagem} alt="" />
      <div className="main-info">
        <h2> {product.titulo} </h2>
        <p> {product.subtitulo} </p>
        <span> adquira já </span>
      </div>
    </div>
  );
}

export default Prizes;
