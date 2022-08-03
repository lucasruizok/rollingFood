import './App.css';
import React from 'react';
//componentes Ant Desing
const { Header, Footer, Content } = Layout;
import { Layout } from 'antd';

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
import {Pedidos} from './layout/pedidos/Pedidos'
import { About } from './layout/about/About';
import { FooterRolling } from './layout/footer/FooterRolling';

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
                path='pedidos'
                element={<Pedidos/>}/>
          <Route
                path='about'
                element={<About/>}/>
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
      <Footer>
            <FooterRolling></FooterRolling>
      </Footer>
    </Layout>
    </>
  )
}

export default App
