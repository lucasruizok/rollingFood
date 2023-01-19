import axios from "axios";
const URL = 'https://stark-scrubland-27201.herokuapp.com';
const createProduct = (data) =>
    fetch(`${URL}/product`, {
        body: JSON.stringify(data),
        method: 'post'
    }).then((response) => response.json())

const getProducts = () =>
    fetch(`${URL}/products`, {
        method: "get"
    }).then((response) => response.json())

const getProductById = (id) =>
    fetch(`${URL}/productsById/${id}`, {
        method: "get"
    }).then((response) => response.json())

const editProduct = (data, id) => {
    fetch(`${URL}/product/${id}`, {
            body: JSON.stringify(data),
            method: "put",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/json",
            }),
        })
        .then((response) => response.json())
}

const deleteProduct = (id) => {
    axios.delete(`${URL}/product/${id}`);
}

const deleteUser = (id, token) => 
    fetch(`${URL}/user/${id}`,{
        method: "delete",
        headers: new Headers({
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          })
    }).then((response) => response.json());

export {
    createProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct,
    deleteUser
};