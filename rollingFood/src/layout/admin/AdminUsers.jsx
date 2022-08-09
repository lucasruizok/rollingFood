import React, { useState } from 'react'
import { Switch, Table, Tag, Space } from 'antd';
import { ModalAdmin } from './ModalAdmin';

const onChange = (e) => {
  console.log(`switch to ${e}`);
  if(e === false){
    <>
    <p>hola</p>
    </>
  }
  
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Estado',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === 'activo' ? 'green' : 'red';
          console.log(tag);
          return (
            <>
            <Switch defaultChecked size='small' onChange={onChange} />
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
            </>
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
        <a className='btn btn-outline-danger'>Eliminar</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['activo']
  },
  {
    key: '1',
    name: 'hola',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['activo']
  },
]


export const AdminUsers = () => {

  return (

    <div className='container'>
      <h4>LISTA DE USUARIOS</h4>
      <hr />
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}
