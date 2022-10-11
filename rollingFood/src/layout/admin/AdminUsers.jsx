import React, { useState } from 'react'
import { Switch, Table, Tag, Space } from 'antd';
import { ModalAdmin } from './ModalAdmin';
import axios from 'axios';
import { useEffect } from 'react';
import URL from '../../constGlobals';
import { deleteUser } from '../../services/api';


export const AdminUsers = () => {
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
      key: 'state',
      render: (_, user) =>
      (
        user.state ?
          <div>
            <Switch size="small" onClick={() => handleStatus(user)} checked='true' />
            <span className='mx-1'>Activo</span>
          </div> :
          <div>
            <Switch size="small" onClick={() => handleStatus(user)} />
            <span className='bg-danger text-white mx-1'>Inactivo</span>
          </div>
      )
    },
    {
      title: 'Rol',
      dataIndex: 'role',
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, user) => (
        <Space size="middle">
          <button className='btn btn-outline-danger' onClick={() => handleDeleteUser(user)}>Eliminar</button>
          <a className='btn btn-outline-warning'>Modificar</a>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);

  useEffect(function () {
    getUsers()
  }, [])

  const handleStatus = (user) => {
    const newUsers = [...data];
    const newUser = newUsers.find((userDb) => { return userDb._id === user._id });
    newUser.state = !newUser.state;
    setData(newUsers);
  }

  async function getUsers() {
    const res = await axios.get(URL + '/users');
    const usersDB = res.data.users
    setData(usersDB)
  }

  function handleDeleteUser(user) {
    deleteUser(user._id);
  }
  return (

    <div className='container'>
      <h4>LISTA DE USUARIOS</h4>
      <ModalAdmin />
      <hr />
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}
