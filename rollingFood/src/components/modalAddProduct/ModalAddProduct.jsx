import React, { useContext } from 'react';
import { Form, Modal, Button } from 'antd';
import '../../index.css';
import useForm from '../../useForm';
import { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import URL from '../../constGlobals';
import { DataContext } from '../../context/DataContext';

export const ModalAddProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const initialState = { name: '', price: null, discount: 0, detail: '', category: ''};
  const { getPizzas } = useContext(DataContext)
  const colInput = 'col-9'
  const colLabel = 'col-3'
  
  const onSubmit = () => {
    const formData={
      imgUrl: imgUrl,
      nombre: name,
      precio: price,
      descuento: discount,
      detalle: detail,
      categoria: category
    }
    console.log(formData)
    axios.post(`${URL}/product`, {
      formData
    })
    setIsModalVisible(false);
    getPizzas();
  };
  
  const { formData, handleInputChange, handleSubmit, inputFileRef } = useForm(
    initialState,
    onSubmit
    );
    const { name, price, discount, detail, category, file } = formData;
    
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleCancelModal = () => {
      setIsModalVisible(false);
    };

  return (
    <>
      <Button type="primary"
        className='mb-2'
        onClick={showModal}>
        Agregar Pizza
      </Button>
      <Modal title="Administracion de Pizzas"
        visible={isModalVisible}
        onCancel={handleCancelModal}
        footer={[
          <Form.Item key={1}>
            <Button htmlType='button' onClick={handleCancelModal}>Cancelar</Button>
            <Button htmlType='submit' onClick={handleSubmit}>Agregar Pizza</Button>
          </Form.Item>
        ]}>
        <div>
          <div className="row">
            <div className="col-12">
              <h5 className='text-center mb-3'>Agregar Pizza</h5>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="row mb-3">
                  <label htmlFor="formFile" className={colLabel}>Imagen Pizza</label>
                  <div className={colInput}>
                    <input type="file"
                    name='file'
                    value={file}
                      className='form-control'
                      ref={inputFileRef}
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor="name" className={colLabel}>Pizza</label>
                  <div className={colInput}>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      maxLength={20}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="price" className={colLabel}>Precio: $</label>
                  <div className={colInput}>
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={handleInputChange}
                      maxLength={4}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="discount" className={colLabel}>Descuento: $</label>
                  <div className={colInput}>
                    <input
                      type="number"
                      name="discount"
                      value={discount}
                      onChange={handleInputChange}
                      maxLength={4}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="detail" className={colLabel}>Categoria:</label>
                  <div className={colInput}>
                    <select
                      name="category"
                      value={category}
                      onChange={handleInputChange}
                      className='form-select'>
                      <option value="" selected>Seleccionar Categoria</option>
                      <option value="cat1">CATEGORIA 1</option>
                      <option value="cat2">CATEGORIA 2</option>
                      <option value="cat3">CATEGORIA 3</option>
                    </select>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor="detail" className={colLabel}>Detalle:</label>
                  <div className={colInput}>
                    <textarea
                      type="text"
                      name="detail"
                      value={detail}
                      onChange={handleInputChange}
                      maxLength={70}
                      className='form-control text-area-form'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal >
    </>
  )
}