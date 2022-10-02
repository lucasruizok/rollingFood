import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
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
import { Error404 } from './layout/error404/Error404';
import { Menu } from './layout/menu/Menu';
import { Login } from './layout/login/Login';
import { Register } from './layout/register/Register';
import { Pedidos } from './layout/pedidos/Pedidos'
import { About } from './layout/about/About';
import { FooterRolling } from './layout/footer/FooterRolling';
import { Admin } from './layout/admin/Admin';
import { AdminUsers } from './layout/admin/AdminUsers';
import { AdminProducts } from './layout/admin/AdminProducts';
import { AdminOrders } from './layout/admin/AdminOrders';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { DataProvider } from './context/DataContext';
// Componente principal
function App() {

      return (
            <DataProvider>
                  <>
                        <Layout>
                              <Header>
                                    <Navbar></Navbar>
                              </Header>
                              <Content>
                                    <Routes>
                                          <Route
                                                path='/'
                                                element={<Menu />} />
                                          <Route
                                                path='menu'
                                                element={<Menu />} />
                                          <Route
                                                path='pedidos'
                                                element={<PrivateRoutes><Pedidos /></PrivateRoutes>} />
                                          <Route
                                                path='about'
                                                element={<About />} />
                                          <Route
                                                path='login'
                                                element={<Login />} />
                                          <Route
                                                path='register'
                                                element={<Register />} />
                                          <Route
                                                path='admin'
                                                element={<PrivateRoutes><Admin /></PrivateRoutes>}>
                                                <Route
                                                      path='users'
                                                      element={<AdminUsers />} />
                                                <Route
                                                      path='products'
                                                      element={<AdminProducts />} />
                                                <Route
                                                      path='orders'
                                                      element={<AdminOrders />} />
                                          </Route>
                                          <Route
                                                path='*'
                                                element={<Error404 />} />
                                    </Routes>
                              </Content>
                              <Footer>
                                    <FooterRolling></FooterRolling>
                              </Footer>
                        </Layout>
                  </>
            </DataProvider>
      )
}

export default App
