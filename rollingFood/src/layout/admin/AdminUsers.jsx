import React, { useState } from 'react'
import { Switch, Table, Tag, Space } from 'antd';
import { ModalAdmin } from './ModalAdmin';
import axios from 'axios';
import { useEffect } from 'react';

export const AdminUsers = () => {  
const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (imgAvatar) => <img src={imgAvatar}/>
  },
  {
    title: 'Nombre de Usuario',
    dataIndex: 'nameUser',
  },
  {
    title: 'Edad',
    dataIndex: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'mail',
  },
  {
    title: 'Estado',
    dataIndex: 'state',
  },
  {
    title: 'Rol',
    dataIndex: 'role'
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='btn btn-outline-danger'>Eliminar</a>
      </Space>
    ),
  },
];
const URL = 'http://localhost:3400'
const [data, setData] = useState([]);

useEffect(function(){
  console.log('useEfect funcionando');
  getUsers()
},[])

async function getUsers(){
      const res = await axios.get(URL+'/users');
      const usersDB = res.data.users
      setData(usersDB)
}
  return (

    <div className='container'>
      <h4>LISTA DE USUARIOS</h4>
      <ModalAdmin/>
      <hr />
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}
