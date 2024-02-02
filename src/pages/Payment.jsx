import {React, useState, useEffect} from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Back from "../assets/back.svg";
import logo from "../assets/logo navbar.png";
import { useAuth } from '../constants/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "primereact/button";
import Footer from "../components/footer";

const Payment = () =>{
    const [rooms, setRooms] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    const roomId = new URLSearchParams(location.search).get('id');
    const token = useAuth().token;
    const [isLoading, setIsLoading] = useState(false);
    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    }
    useEffect(() => {
        fetch(`https://be-kost.vercel.app/api/v1/room/${roomId}`)
          .then((response) => response.json())
          .then((data) => setRooms(data))
          .catch((error) => console.error('Error fetching room data:', error));
    }, [roomId]);
    console.log(rooms)
    if(!token){
        toast.error('anda harus login telebih dahulu')
    }
    console.log(token);
    
    const handlePayment = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://be-kost.vercel.app/api/v1/payment/${roomId}`, {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok) {
                setIsLoading(false);
                const responseData = await response.json();
        
                const paymentUrl = responseData.data.token.redirect_url;
                console.log(paymentUrl)
        
                window.location.href = paymentUrl;
            } else {
                setIsLoading(false);
                const errorMessage = await response.json();
                toast.error(errorMessage.message)
                console.log(response);
                console.error('Error performing payment:', errorMessage.message);
            }
        } catch (error) {
          console.error('Error:', error.message);
        }
    };

    
    const ppn = rooms.price * 0.11;
    return(
        <div>
            <Navbar></Navbar>
            <Link to={'/'}>
                <div className="flex flex-row ml-[200px] mt-[20px]">
                    <img src={Back}></img>
                    <h1 className="font-bold ml-3">Kembali</h1>
                </div>
            </Link>
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
                theme="light" />
            <div className="flex justify-center items-center flex-col">
                <h1 className="font-bold text-[20px] mb-2 text-[#17415F]">Pembayaran Kamar</h1>
                <div className="w-[500px] mb-[100px]">
                    <img src={rooms.imageUrl} alt="room" className="w-[500px] h-[200px] object-cover rounded-t-lg" />
                    <div className="flex justify-center">
                        <h1 className="font-bold text-[#17415F]">{rooms.number}</h1>
                    </div>
                    <h1 className="text-[#17415F] font-medium mb-4">Description: {rooms.description} </h1>
                    <hr />
                    <div className="flex flex-row justify-center items-center gap-10">
                        <div>
                            <h1 className="font-medium text-center">Harga</h1>
                            <p>{formatRupiah(rooms.price)}</p>
                        </div>
                        <div>
                            <h1 className="font-medium text-center">Pajak 11%</h1>
                            <p>{formatRupiah(ppn)}</p>
                        </div>
                        <div>
                            <h1 className="font-medium text-center">Total</h1>
                            <p>{formatRupiah(rooms.price + ppn)}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center mt-5">
                        <Button loading={isLoading} className="bg-red-500 text-white font-bold w-[180px] h-[40px] rounded-lg" label="Bayar" onClick={handlePayment}></Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Payment;