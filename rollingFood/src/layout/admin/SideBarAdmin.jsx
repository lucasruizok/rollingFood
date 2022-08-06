import React from 'react'
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import './admin.css'


export const SideBarAdmin = () => {
    const data = [
        {
            title: 'Usuarios',
            path: 'users'
        },
        {
            title: 'Productos',
            path: 'products'
        },
        {
            title: 'Pedidos',
            path: 'orders'
        },
    ];
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={
                                    <Link to={item.path}>
                                    {item.title}
                                    </Link>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    )
}
