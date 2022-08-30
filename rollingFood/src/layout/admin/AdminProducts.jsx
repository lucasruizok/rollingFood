import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import URL from '../../constGlobals';
import axios from 'axios';

export const AdminProducts = () => {
  const [pizzas, setPizzas] = useState([]);
  const columns = [
    {
      title: 'Pizza',
      dataIndex: 'nombre',
      key: 'nombre',
      render: (text) => <a>{text}</a>,
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
      render: (estado) => ( estado === true? <span>Activo</span> : <span>Pasivo</span>)
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button>Modificar</button>
          <button>Eliminar</button>
        </Space>
      ),
    },
  ];
  useEffect(
    function () {
      getPizzas();
    },
    []
  )
  async function getPizzas() {
    const res = await axios.get(URL + '/products');
    const pizzasList = res.data.productosEncontrados;
    setPizzas(pizzasList)
  }
  console.log(pizzas)
  return (
    <>
      <h1 className='text-center'>ADMINISTRADOR DE PRODUCTOS</h1>
      <hr />
      <Table columns={columns} dataSource={pizzas} />
    </>
  )
}
