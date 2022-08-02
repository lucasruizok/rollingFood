import './App.css';
import React from 'react';
//componentes Ant Desing
const { Header, Footer, Content } = Layout;
import {  Layout } from 'antd';


//componentes para react route
import {
  Routes,
  Route,
} from "react-router-dom";

//componentes propios
import { Navbar } from './layout/navbar/Navbar';
import { Main } from './layout/main/Main';
import{ Error404 } from './layout/error404/Error404';
import{ Menu } from './layout/menu/Menu';
import { Login } from './layout/login/Login';
import{ Register } from './layout/register/Register';
// import Cards from './components/cards';

// Componente principal
function App() {

  return (
    <>
    <Layout>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Content>
        <Routes>
          <Route
                path='/'
                element={<Main/>}/>
          <Route
                path='menu'
                element={<Menu/>}/>
          <Route
                path='login'
                element={<Login/>}/>
          <Route
                path='register'
                element={<Register/>}/>
          <Route
                path='*'
                element={<Error404/>}/>
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </>
  )
}

export default App
