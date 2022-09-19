import React, { useEffect, useState } from "react";
import { BiCart, BiUserPin, BiCaretRightCircle } from "react-icons/bi";

import "./style.css";

import NoUser from "../../assets/nouser.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/context/AuthContext";
import api from "../../services/axios";
import { Link } from "react-router-dom";

export function Cart() {
  const { pedidos } = useContext(AuthContext);
  const [usuario, setUsuario] = useState();
  const token = localStorage.getItem("token");

  // useEffect(() => {
    
  // }, [] );

  api
      .get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data)
        setUsuario(data.user);
      });

  

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <h2>
            {" "}
            <BiCart size={24} /> CHECKOUT{" "}
          </h2>
          <p>
            {" "}
            Você está adquirindo{" "}
            <span>
              {" "}
              <strong> 2 </strong> cota(s){" "}
            </span>{" "}
            do prêmio
            <span>
              {" "}
              <strong> GOLF TSI 1.4 TURBO 2019 </strong>
            </span>{" "}
            por{" "}
            <span>
              {" "}
              <strong>R$ 3 </strong>
            </span>
            . Você terá acesso à compra, assim que comprovar o pagamento e sua
            compra ser aprovada!
          </p>
        </div>
        {
            token? 
            <>
        <div className="cart-user">
          <h2>
            {" "}
            <BiUserPin /> SEUS DADOS DE USUÁRIO:{" "}
          </h2>
          <div className="cart-user-card">
            <img src={NoUser} alt="" />
            <div className="cart-user-info">
              <p> {usuario.name} </p>
              <span> {usuario.phone}</span>
            </div>
          </div>
        </div>
        <div className="cart-checkout">
          <a href="/compra">
            {" "}
            Efetuar o pagamento <BiCaretRightCircle size={20} />{" "}
          </a>
        </div>
            </>
    : <>
            <div className="cart-user">
              <h2>
                {" "}
              </h2>
              <div className="cart-user-card">
                <div className="cart-user-info">
                  <Link className="link" to="/cadastro"> Não tem cadastro? Cadastre-se aqui. </Link>
                </div>
              </div>
            </div>
            <div className="cart-checkout">
              <a href="/cadastro">
                {" "}
                Efetuar o pagamento <BiCaretRightCircle size={20} />{" "}
              </a>
            </div>
                </>
         } 
      </div>
    </>
  );
}

export default Cart;
