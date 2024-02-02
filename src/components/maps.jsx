import React from "react";

const Maps = () =>{
    return(
        <div className="ml-[78px]">
            <div className="">
                <h1 className="mt-[50px] font-bold text-[30px] text-[#17415F] mb-8">Lokasi Kami</h1>
            </div>
            <div className="">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.5807700720667!2d106.85558826959901!3d-6.22105966640293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTMnMTUuOCJTIDEwNsKwNTEnMjIuNCJF!5e0!3m2!1sen!2sid!4v1706870606617!5m2!1sen!2sid" 
                    style={{border: "0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    className="w-[1000px] h-[500px]"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export  default Maps;