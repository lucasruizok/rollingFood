import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd';
import cards from "./Data";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const URL = 'http://localhost:3400';
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const openNotification = (message, description, type) => {
        notification[type]({
            message: message,
            description: description,
            placement: 'top'
        })
    }
    const login = async (formData) => {
        try {
            console.log('Funcion login es correcta')
            const response = await axios.post(`${URL}/login`, formData)
            console.log(response)
            const tokenLogin = response.data.token
            const userLogin = response.data.usuario
            setUser(userLogin)
            setToken(tokenLogin)
            localStorage.setItem('user', JSON.stringify(userLogin));
            localStorage.setItem('token', tokenLogin);
            openNotification('Login correcto', 'Ha ingresado correctamente', 'success')
            setTimeout(() => { navigate('/') }, 1000)
        } catch (error) {
            console.log('error', error)
            openNotification('Login incorrecto', 'No pudo ingresar verificar datos ingresados', 'error')
        }
    }
    const logout = () => {
        console.log('Funcion LOGOUT es correcta')
        setUser(null)
        setToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }
    useEffect(()=>{
        const product = cards.items;
        if(product){
            setPizzas(product);
        }else{
            setPizzas([])
        }
    },[])
    const addCart = (id) =>{
        const check = cart.every(item => item.id !== id);
        if(check){
            const data = pizzas.filter(pizza => pizza.id === id);
            setCart([...cart, ...data]);
            localStorage.setItem('dataCart', JSON.stringify(data));
        } else{
            alert('La pizza que quiere agregar ya se encuentra dentro del carrito');
        }
    }
    useEffect(() =>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart){
            setCart(dataCart);
        }
    },[])

    const data = {
        user,
        token,
        login,
        logout,
        pizzas,
        cart,
        setCart,
        addCart
    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}