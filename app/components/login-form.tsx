'use client'
import { useForm } from "react-hook-form"

export default function LoginForm(){
   const {register, handleSubmit, formState: {errors}} = useForm<Input>()
    
    console.log(errors.email)

    function onSubmit(e: Input){
        console.log(e)
    }

    return(
        <form className="bg-black w-fit flex flex-col bg-opacity-80 backdrop-blur-md py-10 px-20 text-white rounded-lg" onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="email" className="mb-3 font-bold">Email</label>
            <input type="email" id="mail" placeholder="Digite seu email" className="pl-3 py-3 bg-white bg-opacity-10 rounded-lg" {...register("email", {required: true})}/>
           {errors.email &&  <p className="text-red-500 font-bold mt-4">Por favor, digite seu email!</p>}

            <button className="bg-black mt-10 py-3 rounded-lg">Entrar</button>

        </form>
    )
}