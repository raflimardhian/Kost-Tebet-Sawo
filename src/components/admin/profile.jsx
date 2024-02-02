import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Table, Space } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminProfile = ({profiles, handleUpdate, handleDelete}) =>{

    const profileColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Profile picture',
            dataIndex: 'profile_picture',
            key: 'profile_picture',
            render: (text, record) => (
                <img
                  src={record.profile_picture}
                  alt={`Image for ${record.name}`}
                  style={{ width: '100px', height: '80px' }}
                />
              ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Link to={`/update-profile?id=${record.id}`}>
                    <Button className='bg-blue-500' type="primary" onClick={() => handleUpdate(record)}>
                    Update
                    </Button>
                </Link>
                <Button type="primary" danger onClick={() => handleDelete(record.id)}>
                  Delete
                </Button>
              </Space>
            ),
        },
    ];

    return(
        <div>
            <Card title='Data Profile' bordered={false}>
                <Table columns={profileColumns} dataSource={profiles} />
            </Card>
        </div>
    )
}

export default AdminProfile;