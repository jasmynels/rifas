import * as yup from "yup";
import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/rifa.png";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";

export function Forgot() {
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    phone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const apiForgot = (data) => {
    console.log(data);
    setPhone(data);
    api.post("/forgot", data)
      .then((response) => {
        toast.success("Código enviado!");
        setPhone(data);
      })
      .catch((error) => {
        toast.error("Telefone inválido!");
        console.log(error);
      });
  }


  function apiCodigo(data) {
    const formData = data;
    api
      .post(`/forgot/code`, formData)
      .then((response) => {
        toast.success("Código valido!");
        setTimeout(() => {
          navigate("/changepass");
        }, 2000);
        console.log(response)
      })
      .catch((error) => {
        toast.error("Código inválido!");
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
          {
          phone ? (
            <>
            <form onSubmit={handleSubmit(apiCodigo)}>
              <label>
                Telefone para recuperação
                <input
                  type="text"
                  name="login"
                  id="telefoneBlock"
                  className="input"
                  readOnly
                  {...register("phone")}
                />
                <p>{errors.phone?.message}</p>
              </label>
              <label>
                Código
                <input
                  type="text"
                  name="login"
                  id="login"
                  className="input"
                  {...register("code")}
                />
                <p>{errors.code?.message}</p>
              </label>
              <button type="submit" className="login-submit">Enviar</button>
            </form>
            </>
          ) : (
            <form onSubmit={handleSubmit(apiForgot)}>
            <label>
              Telefone para recuperação
              <input
                type="text"
                name="login"
                id="login"
                className="input"
                {...register("phone")}
              />
              <p>{errors.phone?.message}</p>
            </label>
            <button type="submit" className="login-submit">Enviar</button>
            </form>
          )}
      </section>
    </>
  );
}

export default Forgot;
