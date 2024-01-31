import React from "react";

const Maps = () =>{
    return(
        <div className="ml-[78px]">
            <div className="">
                <h1 className="mt-[50px] font-bold text-[30px] text-[#17415F] mb-8">Lokasi Kami</h1>
            </div>
            <div className="">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.790150691079!2d106.8564380230509!3d-6.221308104617288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1706667081171!5m2!1sen!2sid" 
                    style={{border: "0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-[1000px] h-[500px]"
                    >
                </iframe>
            </div>
        </div>
    )
}

export  default Maps;