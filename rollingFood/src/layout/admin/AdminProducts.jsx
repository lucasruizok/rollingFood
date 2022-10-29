import React, { useContext } from 'react'
import { Space, Switch, Table } from 'antd';
import { ModalAddProduct } from '../../components/modalAddProduct/ModalAddProduct';
import { ModalEditProduct } from '../../components/modalEditProduct/ModalEditProduct';
import { DataContext } from '../../context/DataContext';
import { useEffect } from 'react';

export const AdminProducts = () => {

  const { pizzas, handleDeletePizza, setPizzas, getPizzas } = useContext(DataContext);

  useEffect(() =>{
    getPizzas();
  },[])

  const columns = [
    {
      title: 'Imagen',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      render: (urlImg) => <img src={urlImg} width={50} height={50} />,
    },
    {
      title: 'Pizza',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Detalle',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
      render: (precio) => (<span> $ {precio}</span>)
    },
    {
      title: 'Descuento',
      dataIndex: 'discount',
      key: 'discount',
      render: (descuento) => (<span> $ {descuento}</span>)
    },
    {
      title: 'Estado',
      dataIndex: 'state',
      key: 'estado',
      render: (_, pizza) => (
        pizza.estado ?
          <div>
            <Switch size="small" onClick={() => handleStatus(pizza)} checked='true' />
            <span>Activo</span>
          </div> :
          <div>
            <Switch size="small" onClick={() => handleStatus(pizza)} />
            <span>Inactivo</span>
          </div>
      )
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (pizza) => (
        <Space size="middle">
          <ModalEditProduct idProduct={pizza._id} />
          <button onClick={() => handleDeletePizza(pizza._id)} className='btn btn-danger'>Eliminar</button>
        </Space>
      ),
    },
  ];

  const handleStatus = (pizza) => {
    const newPizzas = [...pizzas];
    const newPizza = newPizzas.find((pizzaDb) => pizzaDb.id === pizza.id);
    newPizza.estado = !newPizza.estado;
    setPizzas(newPizzas);
  }

  return (
    <>
      <h1 className='text-center p-0 m-0'>ADMINISTRADOR DE PRODUCTOS</h1>
      <ModalAddProduct />
      <Table columns={columns} dataSource={pizzas} />
    </>
  )
}
