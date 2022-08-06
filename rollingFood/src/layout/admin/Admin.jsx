import React, { useState } from 'react';
import './admin.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { AdminUsers } from './AdminUsers';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';


export const Admin = () => {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Clientes',
                path: 'users'
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'Productos',
              },
              {
                key: '3',
                icon: <UserOutlined />,
                label: 'Pedidos',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
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
            </Routes>
            <AdminUsers/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
