import IreneImg from "../assets/irene-img.png";
import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
const Login = () => {

    const schema = yup.object().shape({
        emailAddress: yup.string()
        .required("Please enter your email address")
        .email("Please enter a valid email"),
        password: yup.string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/,
            'mix capital, symbol and number [at least 8 character]'
        ),
    });

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
        <div className="bg-irene-100 text-irene-400 h-screen">
            
            <div className="flex justify-center items-center mb-4 px-4 py-4">
                <img src={IreneImg} alt="Irene's img" className="w-44"/>
            </div>

            <div className="flex justify-center items-center">
                <p className="font-bold text-lg">Login</p>
            </div>

            <div className="flex flex-col justify-center items-center py-16 w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold mb-2">Email Address</label>
                        <input type="email" name="email" id="email" {...register("emailAddress")} className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "/>
                        <p className="mb-8">{errors.emailAddress?.message}</p>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-bold mb-2">Password</label>
                        <input type="password" name="password" id="password"  {...register("password")} className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1"/>
                        <p className="mb-8">{errors.password?.message}</p>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <button type="submit" className="font-bold rounded-full bg-irene-200 px-8 py-1 hover:border border-irene-400">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;