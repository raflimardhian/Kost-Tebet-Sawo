import { useState } from 'react';
import { signupFields } from "../constants/form"
import FormAction from "./formAction";
import axios from "axios"
import Input from "./input";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

function Signup() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value })
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "telepon") {
      setTelepon(e.target.value);
    } else if (e.target.name === "address") {
        setAddress(e.target.value);
    } else if (e.target.name === "job") {
        setJob(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(
        "https://be-kost.vercel.app/api/v1/auth/",
        {
          name: username,
          email,
          phone: telepon,
          password,
          address,
          job,
        }
      ).then(
        function (res) {
          // console.log(res);
          // const cookies = new Cookies()
          // const token = res.data.data.token
          // cookies.set("token", token, { path: "/login" })
          toast.success(`${res.data.status}, redirect in 3s...`, {
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
              navigate("/otp", {
                state: email
              })
            }, 1000);
          }, 2000);
        }
      ).catch(
        function (error) {
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
        }
      )

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="mt-8 space-y-6 w-screen px-20  md:px-0 md:w-full " onSubmit={handleSubmit}>
      <div className="space-y-px">

        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              // isRequired={field.isRequired}
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
      <FormAction loading={loading} handleSubmit={handleSubmit} text="Daftar" />
    </form>
  )
}

export default Signup