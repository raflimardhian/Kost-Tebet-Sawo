import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/form";
import { ToastContainer, toast } from "react-toastify"
import { useAuth } from '../constants/AuthContext';
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import Cookies from 'universal-cookie';
import FormAction from "./formAction";
import Input from "./input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {
    let nav = useNavigate()
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(fieldsState);
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
        if (e.target.name === "email") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    //Handle Login API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post(
                "https://be-kost.vercel.app/api/v1/auth/login",
                {
                    email: email,
                    password: password
                }
            ).then(
                async function (res) {
                    console.log("Access Token:", res.data.token);
                    const cookies = new Cookies()
                    const token = res.data.token
                    cookies.set("token", token, { path: "/" })
                    login(res.data.token);
                    await toast.success(`${res.data.status}, redirect in 3s...`, {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })

                    setTimeout(() => {
                        setLoading(false)
                        setTimeout(() => {
                            nav('/')
                        }, 1000);
                    }, 2000);

                }
            ).catch(
                function (err) {
                    console.log(err.response.data.message);
                    toast.error(`${err.response.data.message}`, {
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
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="mt-8 space-y-6 w-screen px-20  md:px-0 md:w-full " onSubmit={handleSubmit}>
            <div className="space-y-px">
                {
                    fields.map(field =>
                        <Input
                            isLogin={field.isLogin}
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
            <FormAction onSubmit={handleSubmit} loading={loading} text="Masuk" />
        </form>
    )
}

export default Login;