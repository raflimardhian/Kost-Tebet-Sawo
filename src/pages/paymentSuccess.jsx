import React from "react";
import { useAuth } from '../constants/AuthContext';
import logo from '../assets/logo navbar.png'
import { Link } from 'react-router-dom';
import success from '../assets/payment success.svg'
import { useEffect } from 'react';



const PaymentSuccess = ()  =>{
    const {token} = useAuth();

    useEffect(() => {
        localStorage.setItem('userToken', token);
    }, [token]);

    return(
        <div>
            <div class="h-[88px] bg-[#8BC349] grid grid-cols-2 gap-[900px]">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-[88px] ml-[100px]" />
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <h1 className="bg-[#73ca5c] text-center w-[936px] pt-[15px] pb-[15px] rounded-xl text-white font-bold mt-[52px] mb-[25px]"> Terima kasih atas pembayaran anda</h1>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-[#8BC349] text-[40px] font-bold">Selamat!</h1>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                        <img src={success} alt="" />
                    </div>
                    <div className="flex justify-center mt-[50px]">
                        <h1 className="font-bold">Transaksi Pembayaran kamar berhasil!</h1>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <Link to={'/'}>
                            <button className="bg-[#8BC349] text-white font-bold w-[225px] h-[50px] rounded-2xl">Kembali ke Beranda</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess;