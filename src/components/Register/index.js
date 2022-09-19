import React from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";



import "./style.css"
import { useContext } from 'react';
import { AuthContext } from '../../providers/context/AuthContext';
import { Link } from 'react-router-dom';

export function Register() {

    const { onSubmitFunction } = useContext(AuthContext)

    const formSchema = yup.object().shape({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("Email obrigatório").email("Email Inválido"),
      password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirm_password: yup
      .string()
      .required("Você precisa confirmar sua senha")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
      cpf: yup.string().required("CPF Obrigatório"),
      phone: yup.string().required("Telefone Obrigatório")
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
            <div className='register'>
                <div className='register-header'>
                    <h2> CADASTRO </h2>
                    <p> Preencha seus dados para efetuar o cadastro
                    </p>
                </div>
                <div className='register-form'>
                    
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <br/>
                        <label>
                            Nome completo
                            <input type="text" className='input' id='name' {...register("name")}/>
                            <p>{errors.name?.message}</p>
                        </label>
                        
                        <label>
                            CPF
                            <input type="number" className='input' id='cpf' {...register("cpf")}/>
                            <p>{errors.cpf?.message}</p>
                        </label>

                        <label>
                            E-mail
                            <input type="email" className='input' id='email' {...register("email")}/>
                            <p>{errors.email?.message}</p>
                        </label>
                        <label>
                            Senha
                            <input type="password" className='input' id='password' {...register("password")}/>
                            <p>{errors.password?.message}</p>
                        </label>
                        <label>
                            Repita a senha
                            <input type="password" className='input' id='confirm_password' {...register("confirm_password")}/>
                            <p>{errors.confirm_password?.message}</p>
                        </label>
                        <label>
                            Telefone
                            <input type="number" className='input' id='tel' {...register("phone")}/>
                            <p>{errors.phone?.message}</p>
                        </label>
                        <button className='register-submit'>Enviar</button>
                    </form>
                    <Link className="link" to="/login">Já tem um login? Vá para página de login</Link>
                </div>
            </div>
       </>
    );
}

export default Register