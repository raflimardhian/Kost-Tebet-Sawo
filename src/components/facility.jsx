import React from "react";
import kasur from "../assets/Kamar/kasur.png"
import cermin from "../assets/Kamar/mirror.png"
import meja from "../assets/Kamar/table.png"
import bangku from "../assets/Kamar/chair.png"
import ac from "../assets/Kamar/air-conditioner.png"
import jendela from "../assets/Kamar/window.png"
import listrik from "../assets/Kamar/listrik.png"
import lemari from "../assets/Kamar/lemari.png"
import kitchen from "../assets/Bersama/kitchen.png"
import cctv from "../assets/Bersama/cctv.png"
import parkir from "../assets/Bersama/parking (1).png"
import wifi from "../assets/Bersama/wifi.png"
import ruangTamu from "../assets/Bersama/ruang tamu.png"
import pasar from "../assets/Area/pasar.png"
import sekolah from "../assets/Area/school.png"
import rumahSakit from "../assets/Area/hospital.png"
import miniMarket from "../assets/Area/minimarket.png"
import superMarket from "../assets/Area/supermarket.png"
import halte from "../assets/Area/bus-stop.png"
import stasiun from "../assets/Area/train-station.png"
import angkot from "../assets/Area/transport.png"
import makan from "../assets/Area/tempat makan.png"

const Facility = () =>{
    return(
        <div className="ml-[78px]">
            <h1 className="mt-[50px] font-bold text-[30px] text-[#17415F]">Fasilitas</h1>
            <div>
                <h1 className="text-[#17415F] font-bold mt-5 text-[18px]">Fasilitas Kamar</h1>
                <div className="grid grid-cols-4 grid-flow-row gap-y-6 mt-5">
                    <div className="flex flew row gap-3">
                        <img src={listrik} alt=""/>
                        <p className="text-[#17415F]">900 Watt</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={kasur} alt="" />
                        <p className="text-[#17415F]">Kasur</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={cermin} alt="" />
                        <p className="text-[#17415F]">Cermin</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={bangku} alt="" />
                        <p className="text-[#17415F]">Bangku</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={ac} alt="" />
                        <p className="text-[#17415F]">AC</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={lemari} alt="" />
                        <p className="text-[#17415F]">Lemari</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={meja} alt="" />
                        <p className="text-[#17415F]">Meja</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={jendela} alt="" />
                        <p className="text-[#17415F]">Jendela</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[#17415F] font-bold mt-5 text-[18px]">Fasilitas Bersama</h1>
                <div className="grid grid-cols-4 grid-flow-row gap-y-6 mt-5">
                    <div className="flex flew row gap-3">
                        <img src={kitchen} alt=""/>
                        <p className="text-[#17415F]">Dapur</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={cctv} alt="" />
                        <p className="text-[#17415F]">CCTV</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={parkir} alt="" />
                        <p className="text-[#17415F]">Parkir Motor</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={wifi} alt="" />
                        <p className="text-[#17415F]">WIFI</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={ruangTamu} alt="" />
                        <p className="text-[#17415F]">Ruang Tamu</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[#17415F] font-bold mt-5 text-[18px]">Fasilitas Area</h1>
                <div className="grid grid-cols-4 grid-flow-row gap-y-6 mt-5">
                    <div className="flex flew row gap-3">
                        <img src={pasar} alt=""/>
                        <p className="text-[#17415F]">Pasar</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={rumahSakit} alt="" />
                        <p className="text-[#17415F]">Ruang Tamu</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={miniMarket} alt="" />
                        <p className="text-[#17415F]">Minimarket</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={superMarket} alt="" />
                        <p className="text-[#17415F]">Supermarket</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={makan} alt="" />
                        <p className="text-[#17415F]">Tempat Makan</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={sekolah} alt="" />
                        <p className="text-[#17415F]">Sekolah</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={angkot} alt="" />
                        <p className="text-[#17415F]">Jaklingko</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={stasiun} alt="" />
                        <p className="text-[#17415F]">Stasiun KRL</p>
                    </div>
                    <div className="flex flew row gap-3">
                        <img src={halte} alt="" />
                        <p className="text-[#17415F]">Halte Transjakarta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;