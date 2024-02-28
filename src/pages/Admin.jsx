import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Table, Space } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminUser from "../components/admin/user";
import AdminProfile from "../components/admin/profile/profile";
import AdminRoom from "../components/admin/room/room";
import { useAuth } from '../constants/AuthContext';
import logo from '../assets/logo navbar.png'
import { rooms as AdminRoomData, AdminRoomColumns } from "../components/admin/room/room";
import { jwtDecode } from 'jwt-decode';
import {useNavigate} from 'react-router-dom';




const Dashboard = () => {
    const [rooms, setRooms] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [users, setUsers] = useState([]);
    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    }
    const navigate = useNavigate();

    
    const {token, logout} = useAuth();
    const decodedToken = jwtDecode(token);
    const handleLogout = () => {
        logout();
    };
    console.log(decodedToken)
    console.log(`ini decode ${decodedToken}`)

    useEffect(() => {
        localStorage.setItem('userToken', token);
    }, [token]);

    console.log(`ini token admin${token}`)
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios.get('https://be-kost.vercel.app/api/v1/room/')
            .then(response => {
                setRooms(response.data);
            });
    
        axios.get(`https://be-kost.vercel.app/api/v1/profile/`, config)
            .then(response => {
                console.log('test');
                console.log(response.data)
                setProfiles(response.data);
                profiles.forEach(profile => {
                    const profileId = profile.id;
                    console.log('Profile ID:', profileId);
                });
            });
    
        axios.get('https://be-kost.vercel.app/api/v1/auth/')
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    
    // const roomId = rooms.id
    console.log(users)
    console.log('test');
    const handleUpdate = (record) => {
        console.log('Update record:', record);
        // navigate(`/update-room?id=${roomId}`);
    };
      
    const handleDelete = (id) => {
        axios.delete(`https://be-kost.vercel.app/api/v1/room/${id}`)
            .then(response => {
                console.log('Delete successful');
                // Filter out the deleted item from the rooms state
                setRooms(rooms.filter(room => room.id !== id));
            })
            .catch(error => {
                console.error('Error deleting record:', error);
                // Handle error, display error message to user, etc.
            });
    };
    

    const handleCreate =(record) =>{
        console.log('Create record:', record);
    }
    

    
    return (
        <div>
            <div className='flex  gap-[1150px] text-center'>
                <h1 className='text-[25px]'>Dashboard Admin</h1>
                <Link to={'/admin'} onclick={{handleLogout}}>
                    <h1 className='mt-[15px] text-white font-semiboldw bg-red-600 w-[70px] h-[30px] rounded-lg'> Logout</h1>
                </Link>
            </div>
            <Space direction="vertical" style={{ display: 'flex' }}>
                <AdminRoom
                    rooms={rooms}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
                <AdminProfile
                    profiles={profiles}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
                <AdminUser
                    users={users}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </Space>
        </div>
    );

    // return (
    //   <div>
    //     <h1>Dashboard Admin</h1>
    //     <Row gutter={16}>
    //         <Col span={24}>
    //             <h2>Rooms</h2>
    //         </Col>
    //         {rooms.map(room => roomCard(room))}
    //     </Row>
    //     {/* <Row gutter={16}>
    //       <Col span={24}>
    //         <h2>Profiles</h2>
    //       </Col>
    //       {profiles.map(profile => profileCard(profile))}
    //     </Row> */}
    //     <Row gutter={16}>
    //         <Col span={24}>
    //             <h2>Users</h2>
    //         </Col>
    //         {users.map(user => userCard(user))}
    //     </Row>
    //   </div>
    // );
  };
  
export default Dashboard;