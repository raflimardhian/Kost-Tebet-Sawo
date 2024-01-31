import React from "react"
import logo from "../assets/logo navbar.png"
import login from "../assets/login.svg"
import { Link } from 'react-router-dom';
import logout from '../assets/logout.svg';
import profile from '../assets/profile.svg';
import { useAuth } from '../constants/AuthContext';



const Navbar = () =>{
    const { token, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };
    return(
    <div class="h-[88px] bg-[#8BC349] grid grid-cols-2 gap-[900px]">
        <Link to="/">
            <img src={logo} alt="logo" className="h-[88px] ml-[100px]" />
        </Link>
        {token?(
            <div className="flex flex-row">
                <Link to={'/profile'}>
                    <div className="pt-7 mr-[160px]">
                        <img src={profile} alt="" className="h-[25px]"/>
                    </div>
                </Link>
                <Link to="/" onClick={handleLogout}>
                    <div className="flex flex-nowrap pt-7">
                        <img src={logout} alt="" className="h-[25px]"/>
                        <h1 className="text-white font-bold">Keluar</h1>
                    </div>
                </Link>
            </div>
        ) :(
            <Link to="/login">
                <div className="flex flex-nowrap pt-7 ml-[50px]">
                    <img src={login} alt="login" className="h-[25px]"/>
                    <h1 className="text-white font-bold">Masuk</h1>
                </div>
            </Link>
        ) }
    </div>
    )
}

export default Navbar