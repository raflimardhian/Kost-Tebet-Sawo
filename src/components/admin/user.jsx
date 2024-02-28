import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Table, Space } from 'antd';
import axios from 'axios';


const AdminUser = ({users, handleUpdate, handleDelete}) =>{

    const userColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button className='bg-blue-500' type="primary" onClick={() => handleUpdate(record)}>
                  Update
                </Button>
                <Button type="primary" danger onClick={() => handleDelete(record.id)}>
                  Delete
                </Button>
              </Space>
            ),
        },
    ];

    return(
        <div>
            <Card title="Data User" bordered={false}>
                <Table columns={userColumns} dataSource={users} />
            </Card>
        </div>
    )
}

export default AdminUser;