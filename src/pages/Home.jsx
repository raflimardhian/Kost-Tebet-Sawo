import React, { useEffect } from "react"
import Navbar from "../components/navbar"
import logo from "../assets/logo.png"
import Card from "../components/card"
import { useAuth } from '../constants/AuthContext';
import Facility from "../components/facility";
import Maps from "../components/maps";
import Footer from "../components/footer";



const Home = () =>{ 
    const {token} = useAuth();

    useEffect(() => {
        localStorage.setItem('userToken', token);
    }, [token]);

    return(
        <div className="container">
            <Navbar></Navbar>
            <div className="h-[430px] bg-[#C6FFAD]">
                <h1 className="text-center text-[40px] pt-5 text-[#17415F] font-bold">Selamat Datang di Website kami</h1>
                <div className="grid place-content-center">
                    <img src={logo} alt="logo" className="h-[344px] " />
                </div>
            </div>
            <Card/>
            <Facility/>
            <Maps/>
            <Footer/>
        </div>
    )
}

export default Home