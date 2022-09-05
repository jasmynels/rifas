import React from 'react'
import { BiCamera } from 'react-icons/bi'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from '../../services/axios';




import "./style.css"

export function Register() {

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

      

    //   async function apiCadastro(data){
    //     const formData = data

    //     return await api
    //     .post("/register", formData)
    //     .then((response) => {
    //         console.log("sucess")
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //       });
    //   }

    // const onSubmitFunction = (data) => {
    //      apiCadastro(data)
    //   };
      
    return (
        <>
            <div className='register'>
                <div className='register-header'>
                    <h2> CADASTRO </h2>
                    <p> Preencha seus dados para efetuar o cadastro
                    </p>
                </div>
                <div className='register-form'>
                    
                    <form onSubmit={handleSubmit()}>
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
                </div>
            </div>
       </>
    );
}

export default Register