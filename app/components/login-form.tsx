'use client'
import { useForm } from "react-hook-form"
import jwt from "jsonwebtoken"

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()

    function onSubmit(e: Input) {
        console.log(e)
    }

    return (
        <form className="bg-black w-fit flex flex-col bg-opacity-80 backdrop-blur-md py-14 px-32 text-white rounded-lg max-sm:w-[90%] max-sm:px-5" onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="email" className="mb-3 font-bold">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" className="pl-3 py-3 bg-white bg-opacity-10 rounded-lg border-none" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-500 font-bold mt-4">Por favor, digite seu email!</p>}

            <button className="bg-slate-600 mt-10 py-3 rounded-lg hover:bg-slate-400 ">Entrar</button>
        </form>
    )
}