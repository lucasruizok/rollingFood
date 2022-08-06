import React, { useState } from 'react'
import { Button, Table, Tag, Space } from 'antd';
import { ModalAdmin } from './ModalAdmin';
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Rol',
    dataIndex: 'role',
  },
  {
    title: 'Estado',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === 'activo' ? 'green' : 'red';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='btn btn-outline-warning'>Modificar</a>
        <a className='btn btn-outline-danger'>Eliminar</a>
        <a className='btn '>Dest</a>
      </Space>  
    ),
  },
];
const data = [];

for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: 'lucas@gmail.com',
    role: `Administrador`,
    tags: ['activo'],
  });
}

export const AdminUsers = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (

    <div className='container'>
      <h1 className='text-center'>ADMINISTRAR USUARIOS</h1>
      <div
        style={{
          marginBottom: 16,
        }}
        >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            {/* MODAL */}
          
    </div>
  )
}
