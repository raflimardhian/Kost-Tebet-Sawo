import React, { useState, useRef, useEffect } from "react";
import "./profile.css";
import "../index.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "react-toastify/dist/ReactToastify.css"
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ConfirmDialog } from 'primereact/confirmdialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import { useClickOutside } from "primereact/hooks";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/navbar";
import { useAuth } from '../constants/AuthContext';
import {jwtDecode} from 'jwt-decode';
import logo from "../assets/logo navbar.png"
import Footer from "../components/footer";
// import { useHistory } from 'react-router-dom';



function Akun() {
    const [visible, setVisible] = useState(false);
    // const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const [userData, setUserData] = useState([]);
  
    const overlayRef = useRef(null);
    const cookies = new Cookies()
//   const token = cookies.get('token')
  
//   const decode = jwt_decode(token);
    const {token} = useAuth();
    const decodedToken = jwtDecode(token);
    // const history = useHistory();



  
    let nav = useNavigate()

    
    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960);
        
        if (!token) {
        nav('/login')
        }
    }, [token]);
    useClickOutside(overlayRef, () => {
        setVisible(false);
    });
    const [name, setName] = useState([])
    const [phone, setPhone] = useState([])
    const [job, setJob] = useState([])
    const [address, setAddress] = useState([])
    const [city, setCity] = useState([])
    const [profile, setProfile] = useState([])
    const formData = new FormData();
    formData.append('profile_picture', profile);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('job', job);
    formData.append('city', city);



  
    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://be-kost.vercel.app/api/v1/profile/${decodedToken.id}`, {
            headers: {
                Authorization: `Bearer ${token}` // Menggunakan token dalam header permintaan
            }
            });
            console.log(response);
            setUserData(response.data.getProfile);
            setName(response.data.getProfile.name)
            setPhone(response.data.getProfile.phone)
            setAddress(response.data.getProfile.address)
            setCity(response.data.getProfile.city)
            setJob(response.data.getProfile.job)
            setProfile(response.data.getProfile.profile_picture)
        } catch (error) {
            console.error(error);
        }
        };
        fetchUserData();
    }, [token]);
  
    const handleSubmit = async () => {
        try {
            const response = await axios.put(
            `https://be-kost.vercel.app/api/v1/profile/`,
            formData,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            },
            {   
                profile_picture: profile,
                name: name,
                phone: phone,
                address: address,
                city: city,
                job: job,

            },
        )
        .then(res => {
            toast.success(`${res.data.status} Profil anda telah terganti.`, {
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
                nav("/profile")
            }, 1000);
        })
        } catch (error) {
            console.error(error);
        }
    };

    const navigate = useNavigate()
    console.log(userData)


    return (
        <>
        <div>
            <Navbar />
            <div className="pt-20 mx-6">
                <div className="body">
                    <div className="text-left mt-6 sm:grid-cols-1 md:flex gap-2 mx-auto max-w-4xl">
                        <div className="flex-auto flex my-auto gap-2">
                            <Card title="Ubah Data Profil" className="border-4 border-binar-purple shadow-none w-full rounded-xl ">
                                <Panel header="Data Profil" className="pb-2 rounded-lg">
                                    <div>
                                        <label htmlFor="profile_picture" className="cursor-pointer">
                                        {profile ? (
                                            <img src={profile || URL.createObjectURL(profile)} alt="profile_picture" className="w-20 h-20 rounded-full max-w-20" />
                                        ) : (
                                            <img src={logo} alt="profile_picture" className="w-20 h-20 rounded-full max-w-20" />
                                        )}
                                            <input
                                                type="file"
                                                id="profile_picture"
                                                className="hidden"
                                                accept="image/*"
                                                name="profile_picture"
                                                onChange={(e)=>setProfile(e.target.files[0] || profile)}
                                            />
                                        </label>
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Nama Lengkap
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setName(e.target.value)}
                                        className="w-full border border-gray-300  focus:ring-[#8BC349] focus:border-[#8BC349] focus:z-10 rounded-md outline-none h-[35px] pl-[14px]"
                                        placeholder={userData.name}
                                        type="text"
                                        id="name"
                                        value={name}
                                        name="name"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Nomor Telepon
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setPhone(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="text"
                                        placeholder={userData.phone}
                                        id="phone_number"
                                        value={phone}
                                        name="phone_number"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Kota asal
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setCity(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="text"
                                        placeholder={userData.city}
                                        id="city"
                                        value={city}
                                        name="city"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Alamat
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setAddress(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="text"
                                        placeholder={userData.address}
                                        id="address"
                                        value={address}
                                        name="address"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Pekerjaan
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setJob(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="text"
                                        placeholder={userData.job}
                                        id="job"
                                        value={job}
                                        name="job"
                                    />
                                    </div>
                                </Panel>
                                {/* <Toast ref={toast} /> */}
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
                                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Anda Yakin Ingin Mengubahnya?"
                                    header="Confirmation" icon="pi pi-exclamation-triangle" accept={handleSubmit} reject={reject} />
                                <div className="w-full text-center">
                                    <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Simpan" className="w-[150px] h-[40px]" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Akun;