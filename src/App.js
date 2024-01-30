import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './constants/AuthContext';
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Otp from "./pages/otp"
import Payment from "./pages/Payment"
import PaymentSuccess from './pages/paymentSuccess';


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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
