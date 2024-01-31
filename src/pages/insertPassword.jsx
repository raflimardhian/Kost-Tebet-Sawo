import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordBaruFields } from "../constants/form";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormAction from "../components/formAction";
import axios from "axios"
import Input from "../components/input";
import logo from "../assets/logo navbar.png";


const fields = resetPasswordBaruFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

function InsertPassword() {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [emailHidden, setEmailHidden] = useState()
    const [passwordBaru, setPasswordBaru] = useState("");
    const [confirmPasswordBaru, setConfirmPasswordBaru] = useState("");
    const [resetState, setResetState] = useState(fieldsState);
    const location = useLocation()
    const token = new URLSearchParams(location.search).get('token');
    const navigate = useNavigate()

    useEffect(() => {
        setEmailHidden(location?.state?.email)
        setOtp(location?.state?.otp)
        console.log(location?.state)
        console.log(passwordBaru);
    }, [emailHidden]);

    const handleChange = (e) => {
        setResetState({ ...resetState, [e.target.id]: e.target.value, token })
        if (e.target.name === "password") {
            setPasswordBaru(e.target.value);
            // username = e.target.value;
        } else if (e.target.name === "confirm-password") {
            setConfirmPasswordBaru(e.target.value);
            // password = e.target.value;
        }
    }

    console.log(token)

    //Handle Reset Passowrd API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post(
                "https://be-kost.vercel.app/api/v1/auth/insert-password",
                {
                    newPassword: passwordBaru,
                    confirmPassword: confirmPasswordBaru,
                    reset_password_token: token
                }
            ).then(
                function (res) {
                    toast.success(`${res.data.message}, redirect in 3s...`, {
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
                            navigate("/login")
                        }, 1000);
                    }, 2000);
                }
            ).catch(
                function (err) {
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
                                    value={resetState[field.id]}
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
                    <FormAction loading={loading} handleSubmit={handleSubmit} text="Simpan" />
                </form>
            </div>
        </div>
    )
}

export default InsertPassword;