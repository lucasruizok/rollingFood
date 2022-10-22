import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd';

const URL = 'http://localhost:3400';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate()
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
    const auth = {
        user,
        token,
        login,
        logout
    }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}