import React, { useContext } from "react";
import { AuthContext } from "../../providers/context/AuthContext";
import "./style.css";

export function Prizes() {

  const {product} = useContext(AuthContext)

  return (
    <>
      <div className="main-prize">
        <div className="main-prize-overlay"></div>
        <img src={product.imagem} alt="" />
        <div className="main-info">
          <h2> {product.titulo} </h2>
          <p> {product.subtitulo} </p>
          <span> adquira já </span>
        </div>
      </div>
    </>
  );
}

export default Prizes;
