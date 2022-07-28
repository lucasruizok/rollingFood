import React from 'react'
import './navbar.css'
import 'antd/dist/antd.css';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const links = [
        {
            title: 'INICIO',
            path: '/'
        },
        {
            title: 'MENU',
            path: 'menu'
        },
        {
            title: 'INGRESAR',
            path: 'login'
        },
        {
            title: 'REGISTRARSE',
            path: 'register'
        }
    ]
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <>
            <nav>
                <ul>
                        <li>
                            <NavLink
                                to='/'
                            >
                                LOGO1
                            </NavLink>

                        </li>
                    {
                        links.map(link => {
                            return (
                    <li>
                        <NavLink
                            to={link.path}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            {link.title}
                        </NavLink>

                    </li>
                    )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}
