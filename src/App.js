import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './constants/AuthContext';
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Otp from "./pages/otp"
import Payment from "./pages/Payment"
import PaymentSuccess from './pages/paymentSuccess';
import Profile from './pages/profile';
import ResetPassword from './pages/resetPassword';
import InsertPassword from './pages/insertPassword';
import Dashboard from './pages/Admin';
import AdminLogin from './pages/adminLogin';
import UpdateProfile from './components/admin/updateProfile';
import UpdateRoom from './components/admin/updateRoom';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/payment-success' element={<PaymentSuccess/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/insert-password' element={<InsertPassword/>}/>
          <Route path='/admin-home'  element={<Dashboard/>}/>
          <Route path='/admin'  element={<AdminLogin/>}/>
          <Route path='/update-profile' element={<UpdateProfile/>}/>
          <Route path='/update-room' element={<UpdateRoom/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
