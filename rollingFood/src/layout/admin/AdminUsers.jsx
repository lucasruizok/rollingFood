import React, { useState } from 'react'
import { Switch, Table, Tag, Space } from 'antd';
import { ModalAdmin } from './ModalAdmin';
import axios from 'axios';
import { useEffect } from 'react';


export const AdminUsers = () => {  
  const URL = 'http://localhost:3400'
const columns = [
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
    key:'state',
    render: (state) => <> 
    <Switch size="small" defaultChecked />
    </>
  },
  {
    title: 'Rol',
    dataIndex: 'role',
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button className='btn btn-outline-danger' onClick={deleteUser} title={record}>Eliminar</button>
        <a className='btn btn-outline-warning'>Modificar</a>
      </Space>
    ),
  },
];


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
function deleteUser(e){
  console.log(e)
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
