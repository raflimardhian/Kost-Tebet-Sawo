import Header from "../components/header";
// import { Image } from 'primereact/image';
import Logo from '../assets/logo.png'
import Signup from "../components/register";

function RegisterPage() {
    return (
        <div className="flex items-center overflow-hidden">
            <div className='w-full'>    
                <img src={Logo} alt="Logo" className='w-[700px] h-full fixed top-0 left-0'/>
            </div>
            <div className='flex flex-col w-full px-[130px] mt-8'>
                <label className="text-3xl lg:text-left text-center px-30 px-0 font-extrabold text-gray-900 ">Daftar</label>
                <div className='px-0'>
                    <Signup />
                </div>
                <Header
                    paragraph="Sudah punya akun? "
                    linkName="Masuk di sini"
                    linkUrl="/login"
                />
            </div>
        </div>
    )
}

export default RegisterPage;