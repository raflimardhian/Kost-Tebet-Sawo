import React, { useState, useRef, useEffect } from "react";
import "./updateRoom.css";
import "../../index.css";
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
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../constants/AuthContext';
import {jwtDecode} from 'jwt-decode';
import logo from "../../assets/logo navbar.png"
import back from "../../assets/back.svg"

// import { useHistory } from 'react-router-dom';



function UpdateRoom() {
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
    const location = useLocation();
    const roomId = new URLSearchParams(location.search).get('id');




  
    let nav = useNavigate()

    
    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960);
        
        if (!token) {
        nav('/admin')
        }
    }, [token]);
    useClickOutside(overlayRef, () => {
        setVisible(false);
    });
    const [number, setNumber] = useState([])
    const [price, setPrice] = useState([])
    const [description, setDescription] = useState([])
    const [image, setImage] = useState([])
    const formData = new FormData();
    formData.append('imageUrl', image);
    formData.append('number', number);
    formData.append('price', price);
    formData.append('description', description);




  
    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://be-kost.vercel.app/api/v1/room/${roomId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Menggunakan token dalam header permintaan
            }
            });
            console.log('ini response');
            console.log(response);
            setUserData(response.data);
            setNumber(response.data.number)
            setPrice(response.data.phone)
            setDescription(response.data.address)
            setImage(response.data.imageUrl)
        } catch (error) {
            console.error(error);
        }
        };
        fetchUserData();
    }, [token]);
  
    const handleSubmit = async () => {
        try {
            const response = await axios.put(
            `https://be-kost.vercel.app/api/v1/room/${roomId}`,
            formData,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            },
            {   
                imageUrl: image,
                number: number,
                price: price,
                description: description,

            },
        )
        .then(res => {
            toast.success(`Success, Room telah terganti.`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
            
            // setTimeout(() => {
            //     nav("/profile")
            // }, 1000);
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
            <div className="pt-20 mx-6">
                <div className="body">
                    <Link to={'/admin-home'}>
                        <div className="flex flex-row mr-[60px]">
                            <img src={back} alt="" />
                            <h1 className="mr-[30px]">Kembali</h1>
                        </div>
                    </Link>
                    <div className="text-left mt-6 sm:grid-cols-1 md:flex gap-2 mx-auto max-w-4xl">
                        <div className="flex-auto flex my-auto gap-2">
                            <Card title="Ubah Data Room" className="border-4 border-binar-purple shadow-none w-full rounded-xl ">
                                <Panel header="Data Room" className="pb-2 rounded-lg">
                                    <div>
                                        <label htmlFor="imageUrl" className="cursor-pointer">
                                        {image ? (
                                            <img src={image || URL.createObjectURL(image)} alt="imageUrl" className="w-20 h-20 max-w-20" />
                                        ) : (
                                            <img src={logo} alt="imageUrl" className="w-20 h-20 rounded-full max-w-20" />
                                        )}
                                            <input
                                                type="file"
                                                id="imageUrl"
                                                className="hidden"
                                                accept="image/*"
                                                name="imageUrl"
                                                onChange={(e)=>setImage(e.target.files[0] || image)}
                                            />
                                        </label>
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Number
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setNumber(e.target.value)}
                                        className="w-full border border-gray-300  focus:ring-[#8BC349] focus:border-[#8BC349] focus:z-10 rounded-md outline-none h-[35px] pl-[14px]"
                                        placeholder={userData.number}
                                        type="text"
                                        id="number"
                                        value={number}
                                        name="number"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Price
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setPrice(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="number"
                                        placeholder={userData.price}
                                        id="price"
                                        value={price}
                                        name="price"
                                    />
                                    </div>
                                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                                    Description
                                    </div>
                                    <div className="col-12 flex-column justify-content-start pb-2">
                                    <InputText
                                        onChange={(e)=>setDescription(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md outline-none h-[35px] pl-[14px]"
                                        type="text"
                                        placeholder={userData.description}
                                        id="description"
                                        value={description}
                                        name="description"
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
        </div>
        </>
    );
}

export default UpdateRoom;