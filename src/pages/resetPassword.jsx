import React from "react";
import Input from "../components/input";
import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordFields } from "../constants/form";
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormAction from "../components/formAction";
import axios from "axios"
import logo from "../assets/logo navbar.png";


const fields = resetPasswordFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');


const ResetPassword = () =>{
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [resetPassState, setResetPassState] = useState(fieldsState);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setResetPassState({ ...resetPassState, [e.target.id]: e.target.value })
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    }

    //Handle Reset Password API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('https://be-kost.vercel.app/api/v1/auth/forget-password', {
                email: email
            }).then(res => {
                toast.success(`Email ditemukan, ${res.data.message}`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                setLoading(false)
            }).catch(error => {
                toast.error(`${error.response.data.message}`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                setLoading(false)
            })
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <div>
            <div class="h-[88px] bg-[#8BC349] grid grid-cols-2 gap-[900px]">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-[88px] ml-[100px]" />
                </Link>
            </div>
            <div className="flex justify-center">
                <form className="mt-8 space-y-6 px-20 w-[800px] " onSubmit={handleSubmit}>
                    <div className="-space-y-px">
                        {
                            fields.map(field =>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={resetPassState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                />
                            )
                        }
                        <ToastContainer
                            position="bottom-center"
                            autoClose={2000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                    <FormAction loading={loading} handleSubmit={handleSubmit} text="Kirim" />
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;