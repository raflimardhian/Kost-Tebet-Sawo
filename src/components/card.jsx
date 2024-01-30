import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './card.css'
import logo from "../assets/logo.png"
import logo1 from "../assets/logo otp.png"
import leftArrow from "../assets/left arrow.png"
import rightArrow from "../assets/right arrow.png"
import { useAuth } from '../constants/AuthContext';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"




const images = [
  logo,
  logo1,
];

const Arrow = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 gap-[100px] ${
        direction === 'left' ? 'left-4' : 'right-4'
      } z-10 cursor-pointer`}
      onClick={onClick}
    >
      <img src={direction === 'left' ? leftArrow : rightArrow} alt={`${direction} arrow`} />
    </div>
  );
};

const Card = () => {
    const [rooms, setRooms] = useState([]);
    const [currentImages, setCurrentImages] = useState(Array(images.length).fill(0));
    const [isHovered, setIsHovered] = useState(Array(images.length).fill(false));
    const navigate = useNavigate();
    const token = useAuth();
    
    useEffect(() => {
        fetch('https://be-kost.vercel.app/api/v1/room/')
          .then(response => response.json())
          .then(data => setRooms(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    const handleNextImage = (index) => {
        setCurrentImages((prev) => {
            const updatedCurrentImages = [...prev];
            updatedCurrentImages[index] = (prev[index] + 1) % rooms[index].image.length;
            return updatedCurrentImages;
        });
        setIsHovered((prev) => {
            const updatedIsHovered = [...prev];
            updatedIsHovered[index] = false;
            return updatedIsHovered;
        });
    };


    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    }
    const handleButtonClick = async (roomId) => {
        if (!token || !token.token) {
            await toast.error("Login terlebih dahulu", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/login');
        } else{
            navigate(`/payment?id=${roomId}`);
        }
    };
    

    const handlePrevImage = (index) => {
        setCurrentImages((prev) => {
            const updatedCurrentImages = [...prev];
            updatedCurrentImages[index] = (prev[index] - 1 + rooms[index].image.length) % rooms[index].image.length;
            return updatedCurrentImages;
        });
        setIsHovered((prev) => {
            const updatedIsHovered = [...prev];
            updatedIsHovered[index] = false;
            return updatedIsHovered;
        });
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-4 gap-14 '>
                {rooms.map((room, index) => (
                    <div className='border-solid rounded-lg mt-[50px] w-[300px] card-room'>
                        <div key={index} className="relative h-64 w-full" onMouseEnter={() => setIsHovered((prev) => { const updatedIsHovered = [...prev]; updatedIsHovered[index] = true; return updatedIsHovered; })}
                            onMouseLeave={() => setIsHovered((prev) => { const updatedIsHovered = [...prev]; updatedIsHovered[index] = false; return updatedIsHovered; })}>
                            {room.image && room.image.length > 0 && (
                                <img
                                src={room.image[currentImages[index]]?.imageUrl}
                                alt={`Room ${index + 1}`}
                                className="rounded-x-lg h-full w-full object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                            )}
                            {isHovered[index] && room.image && room.image.length > 1 && (
                                <Arrow direction="left" onClick={() => handlePrevImage(index)} />
                                )}
                            {isHovered[index] && room.image && room.image.length > 1 && (
                                <Arrow direction="right" onClick={() => handleNextImage(index)} />
                            )}  
                        </div>
                        <div className='mt-2 pb-4'>
                            <h1 className='text-center font-bold'>No.{room.number}</h1>
                            <h1 className='NO'>Kost Putra</h1>
                            <p className="description overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]" >
                                {room.description} </p>
                            <p className='price'>{formatRupiah(room.price)}</p>
                            <p>Sudah diisi oleh: {rooms[index]?.user?.profile?.name}</p>
                        </div>
                        <div className='flex justify-center items-center mb-4'>
                            <button type='submit' className='bg-[#17415F] h-[40px] w-[130px] text-[white] font-bold rounded-md hover:bg-[#234a66]' onClick={() => handleButtonClick(room.id)} >Pesan</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Card;