import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
export const AdminProducts = () => {
  const productsList = [
    {
      name: 'lucas',
      state: ['activo'],
      price: 2,
      detail:'ssdaa',
      category: 'hola'
    },
    {
      name: 'lucas',
      state: ['activo'],
      price: 2,
      detail:'ssdaa',
      category: 'hola'
    },
    {
      name: 'lucas',
      state: ['activo'],
      price: 2,
      detail:'ssdaa',
      category: 'hola'
    },
  ];
  const [products, setProducts] = useState([]);
  useEffect(
    function () {
      console.log('useEffect in adminProducts');
      setProducts(productsList);
    },
    []
  )
  const { Column } = Table;

  return (
    <>
      <h1 className='text-center'>ADMINISTRADOR DE PRODUCTOS</h1>
      <hr />
      <Table dataSource={products}>
        <Column title="Nombre" dataIndex="name" key="name" />
        <Column title="Categoria" dataIndex="category" key="category" />
        <Column title="Precio" dataIndex="price" key="price" />
        <Column title="Detalle" dataIndex="detail" key="detail" />
        <Column
          title="Estado"
          dataIndex="state"
          key="state"
          render={(state) => (
            <>
              {state.map((state) =>{ 
                let color = state === 'activo' ? 'green' : 'red'
                return (          
                <Tag color={color} key={state}>
                  {state.toUpperCase()}
                </Tag>
              )}
              )}
            </>
          )}
        />
      </Table>
    </>
  )
}
