import React, { useContext } from 'react'
import { Space, Table } from 'antd';
import { ModalAddProduct } from '../../components/modalAddProduct/ModalAddProduct';
import { ModalEditProduct } from '../../components/modalEditProduct/ModalEditProduct';
import { DataContext } from '../../context/DataContext';

export const AdminProducts = () => {

  const {pizzas, handleDeletePizza} = useContext(DataContext)
  const columns = [
    {
      title: 'Imagen',
      dataIndex: 'imgUrl',
      key: 'imagen',
      render: (urlImg) => <img src={urlImg} width={50} height={50}/>,
    },
    {
      title: 'Pizza',
      dataIndex: 'nombre',
      key: 'nombre',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Categoria',
      dataIndex: 'categoria',
      key: 'categoria',
    },
    {
      title: 'Detalle',
      dataIndex: 'detalle',
      key: 'detalle',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      render: (precio) => (<span> $ {precio}</span>)
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado) => (estado === true ? <span>Activo</span> : <span>Pasivo</span>)
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (pizza) => (
        <Space size="middle">
          <ModalEditProduct idProduct={pizza._id}/>
          <button onClick={()=> handleDeletePizza(pizza._id)} className='btn btn-danger'>Eliminar</button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1 className='text-center p-0 m-0'>ADMINISTRADOR DE PRODUCTOS</h1>
      <ModalAddProduct />
      <Table columns={columns} dataSource={pizzas} />
    </>
  )
}
