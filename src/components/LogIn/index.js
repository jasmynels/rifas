import * as yup from "yup";
import React from 'react'
import "./style.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from '../../assets/rifa.png'

export function LogIn() {

    const formSchema = yup.object().shape({
        email: yup.string().required("Email ou Telefone obrigatório").email("Email Inválido"),
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

      const onSubmitFunction = (data) => {
        console.log(data)
      };

    return (
   
            <section className='login'>
                <img src={Logo} alt='' />
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <label>
                        Telefone ou Email
                        <input type='text' name='login' id='login' className='input' {...register("email")}/>
                        <p>{errors.email?.message}</p>
                    </label> 
                    <label>
                        Senha
                        <input type='password' name='login' id='login' className='input' required {...register("password")}/>
                    </label>
                    <p>{errors.password?.message}</p>
                    <button className='login-submit'>Enviar</button>
                </form>
            </section>
       
    );
}

export default LogIn