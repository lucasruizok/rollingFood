import React, { useContext, useState } from "react";
import { editProduct, getProductById } from "../../services/api";
import { Form, Modal, Button } from 'antd';
import useForm from '../../useForm';
import 'antd/dist/antd.css';
import { DataContext } from "../../context/DataContext";

export const ModalEditProduct = ({ idProduct }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    let initialState = {};
    const { getPizzas } = useContext(DataContext);

    const getProductId = () => {
        getProductById(idProduct)
            .then((response) => {
                const { nombre, precio, descuento, categoria, detalle } = response.producto;
                initialState = {
                    name: nombre,
                    price: precio,
                    discount: descuento,
                    category: categoria,
                    detail: detalle
                };
                setFormData(initialState);
            })
            .catch((error) => console.log(error));
    };

    const onSubmit = () => {
        const data = {
            nombre: name,
            precio: price,
            descuento: discount,
            detalle: detail,
            categoria: category
        };
        editProduct(data, idProduct);
        setIsModalVisible(false);
        getPizzas();
    };

    const { formData, handleInputChange, handleSubmit, setFormData } = useForm(
        initialState,
        onSubmit
    );

    const { category, discount, detail, name, price } = formData;

    const showModal = () => {
        setIsModalVisible(true);
        getProductId();
    };
    const handleCancelModal = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <button
                className='mb-2 btn btn-primary'
                onClick={showModal}>
                Modificar
            </button>
            <Modal title="Administracion de Pizzas"
                visible={isModalVisible}
                onCancel={handleCancelModal}
                footer={[
                    <Form.Item key={1}>
                        <Button htmlType='button' onClick={handleCancelModal}>Cancelar</Button>
                        <Button htmlType='submit' onClick={handleSubmit}>Modificar Pizza</Button>
                    </Form.Item>
                ]}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h5 className='text-center'>Modificar Pizza</h5>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Pizza</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="price">Precio: $</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={price}
                                        onChange={handleInputChange}
                                        maxLength={4}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="discount">Descuento: $</label>
                                    <input
                                        type="number"
                                        name="discount"
                                        value={discount}
                                        onChange={handleInputChange}
                                        maxLength={4}
                                    />
                                </div>
                                <select
                                    name="category"
                                    value={category}
                                    onChange={handleInputChange}>
                                    <option value="" selected>Seleccionar Categoria</option>
                                    <option value="cat1">CATEGORIA 1</option>
                                    <option value="cat2">CATEGORIA 2</option>
                                    <option value="cat3">CATEGORIA 3</option>
                                </select>
                                <div>
                                    <label htmlFor="detail">Detalle:</label>
                                    <input
                                        type="text"
                                        name="detail"
                                        value={detail}
                                        onChange={handleInputChange}
                                        maxLength={70}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal >
        </>
    )
}