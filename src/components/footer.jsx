import React from "react";
import logo from "../assets/logo footer.png"

const Footer = () =>{
    return(
        <div className="w-screen bg-[#17415F] h-[400px] mt-[70px] ">
            <div className="flex flex-row justify-center items-center">
                <div>
                    <img src={logo} alt="footer" className="w-[250px]" />
                </div>
                <div className="text-white">
                    <div className="flex flex-row">
                        <h1 className="mr-[25px]">E-mail</h1>
                        <p>: kostebetsawo@gmail.com</p>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="mr-[12px]">No. Telp</h1>
                        <p>: 081246757893</p>
                    </div>
                </div>
            </div>
            <div className="text-white flex justify-center items-center font-bold"> Icons made by <a href="https://www.flaticon.com/authors/inna-mikheeva" title="Inna Mikheeva"> Inna Mikheeva </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
            </div>
            <div className="flex justify-center items-center">
                <p className="font-bold text-white mt-[70px]">© Kost Tebet Sawo, 2024</p>
            </div>
        </div>
    )
}

export default Footer;