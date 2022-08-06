import React, { useState } from 'react';
import './admin.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

//PAGES
import { SideBarAdmin } from './SideBarAdmin';
import { AdminUsers } from './AdminUsers';
import { AdminProducts } from './AdminProducts';
import { AdminOrders } from './AdminOrders';


export const Admin = () => {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideBarAdmin/>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route
                path='users'
                element={<AdminUsers/>} />
              <Route
                path='products'
                element={<AdminProducts/>} />
              <Route
                path='orders'
                element={<AdminOrders/>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
