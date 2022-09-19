import * as yup from "yup";
import React, { useContext } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/rifa.png";
import { AuthContext } from "../../providers/context/AuthContext";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export function LogIn() {
  const { apiLogin } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    phone: yup.string().required("Telefone obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <div>
        <Toaster />
      </div>
      <section className="login">
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(apiLogin)}>
          <label>
            Telefone ou Email
            <input
              type="text"
              name="login"
              id="login"
              className="input"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
          </label>
          <label>
            Senha
            <input
              type="password"
              name="login"
              id="login"
              className="input"
              required
              {...register("password")}
            />
          </label>
          <p>{errors.password?.message}</p>
          <button className="login-submit">Enviar</button>
        </form>
        <Link className="link" to="/forgot">Esqueceu a senha? </Link>
      </section>
    </>
  );
}

export default LogIn;
