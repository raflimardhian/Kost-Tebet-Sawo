import Header from '../components/header'
import Login from '../components/login'
import Logo from '../assets/logo.png'

export default function LoginPage() {
    return (
        <div className="flex items-center overflow-y-hidden h-screen">
            <div className='w-full'>
                <img src={Logo} alt="Image" className='w-[700px] h-full'/>
            </div>
            <div className='flex flex-col w-full px-[130px]'>
                <label className="text-3xl lg:text-left text-center px-30 px-0 font-extrabold text-gray-900 ">Masuk</label>
                <div className='px-0'>
                    <Login />
                </div>
                <Header
                    paragraph="Belum punya akun? "
                    linkName="Daftar di sini"
                    linkUrl="/register"
                />
            </div>
        </div>
    )
}