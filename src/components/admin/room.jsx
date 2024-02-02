import React, { useEffect } from 'react';
import { Card, Col, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom';

const AdminRoom = ({ rooms, handleUpdate, handleDelete }) => {
  // ... (Sesuaikan fungsi formatRupiah jika diperlukan)
    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    }

  const roomColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text, record) => (
        <img
          src={record.imageUrl}
          alt={`Image for ${record.name}`}
          style={{ width: '100px', height: '80px' }}
        />
      ),
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <span>{formatRupiah(record.price)}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
            <Link to={`/update-room?id=${record.id}`}>
              <Button className='bg-blue-500' type="primary" onClick={() => handleUpdate(record)}>
                  Update
              </Button>
            </Link>
            <Button
                type="primary"
                danger
                onClick={() => handleDelete(record.id)}
            >
                Delete
            </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card title="Data Room" bordered={false}>
        <Table columns={roomColumns} dataSource={rooms} />
      </Card>
    </div>
  );
};

export default AdminRoom;
