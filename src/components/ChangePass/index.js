import * as yup from "yup";
import React, { useContext } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/rifa.png";
import { AuthContext } from "../../providers/context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import api from "../../services/axios";

export function ChangePass() {
  const [phone, setPhone] = useState();
  const token = localStorage.getItem("token");
  const formSchema = yup.object().shape({
    password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirm_password: yup
    .string()
    .required("Você precisa confirmar sua senha")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  function apiSenha(data) {
    const formData = data;
    console.log(formData);
    api
      .post("/changepassword", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      }})
      .then((response) => {
        toast.success("Senha atualizada!");
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <section className="login">
        <img src={Logo} alt="" />
            <form onSubmit={handleSubmit(apiSenha)}>
              <label>
                Nova senha
                <input
                  type="password"
                  name="login"
                  id="login"
                  className="input"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </label>
              <label>
                Confirmação da nova senha
                <input
                  type="password"
                  name="login"
                  id="login"
                  className="input"
                  {...register("confirm_password")}
                />
                <p>{errors.confirm_password?.message}</p>
              </label>
              <button type="submit" className="login-submit">Enviar</button>
            </form>
      </section>
    </>
  );
}

export default ChangePass;
