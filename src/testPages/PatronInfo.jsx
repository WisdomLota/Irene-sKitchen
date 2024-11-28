import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IreneImg from "../assets/irene-img.png"
import backArrow from "../assets/back.svg";
const PatronInfo = () => {

    const schema = yup.object().shape({
        fullName: yup.string("Name must contain letters").required("Please enter your Full Name"),
        phoneNo : yup.string()
        .required("Please enter your Mobile Number")
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        address: yup.string().required("Please enter your address").min(15),
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        whatsAppNo: yup.string()
        .required("Please enter your WhatsApp Number")
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver:yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <div className="text-irene-400 bg-irene-100">
            
            <div className="flex px-4 py-4">
                <img src={backArrow} alt="back arrow" className="w-20 h-16"/>
                <img src={IreneImg} alt="Irene's Img" className="w-44 mx-auto"/>
            </div>

            <div className="flex justify-center items-center">
                <p className="font-bold text-lg ml-16">Patron's Information</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex justify-center ">
                        <div className="flex flex-col justify-center items-center pt-8 pb-8 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="fullName">Full Name: </label>
                                <input type="text" name="fullName" id="fullName" {...register('fullName')} className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 " />
                                <p className="mb-8">{errors.fullName?.message}</p>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phoneNo">Phone Number: </label>
                                <input type="tel" name="phoneNo" id="phoneNo" {...register('phoneNo')}className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "/>
                                <p className="mb-8">{errors.phoneNo?.message}</p>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="deliveryAddress">Delivery Address: </label>
                                <textarea name="deliveryAddress" id="deliveryAddress" rows={5} cols={25} {...register('address')} className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "></textarea>
                                <p className="mb-8">{errors.address?.message}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-8 pb-8 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="email">Email Address: </label>
                                <input type="email" name="email" id="email" {...register('emailAddress')}className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "/>
                                <p className="mb-8">{errors.emailAddress?.message}</p>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="whatsAppNo">WhatsApp Number: </label>
                                <input type="whatsAppNo" name="whatsAppNo" id="whatsAppNo" {...register('whatsAppNo')}className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "/>
                                <p className="mb-8">{errors.whatsAppNo?.message}</p>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="AdditionalInfo">Additional Information: </label>
                                <textarea name="AdditionalInfo" id="AdditionalInfo" rows={5} cols={25} className="rounded-lg border-2 border-solid border-irene-400 bg-irene-100 w-96 p-1 "></textarea>
                                <p className="mb-8"></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-4">
                        <button type="submit" className="px-12 py-1 mb-6 bg-irene-200 font-bold rounded-full hover:border border-irene-400">Confirm and Place Order</button>
                    </div>
                </form>
            </div>
            
        </div>
        </>
    )
}

export default PatronInfo;