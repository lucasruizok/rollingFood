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
            title: 'PEDIDOS',
            path: 'pedidos'
        },{
            title: 'CONOCENOS',
            path: 'about'
        }
    ]
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <>
            <nav className='navbar-expand-lg navbar'>
                    <div className='d-flex'>
                    <NavLink to='/'>
                        <img src='src/assets/logo.png' alt='logo'></img>
                    </NavLink>
                    </div>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
                        <ul className='navbar-nav menu'>
                            {
                                links.map(link => {
                                    return (
                                        <li className='nav-item'>
                                            <NavLink
                                                to={link.path}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                                className='nav-link'
                                            >
                                                {link.title}
                                            </NavLink>

                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        
                    </div>
                    <NavLink to='login'
                             className='nav-link btn btn-success p-2 mx-2 btnLogin'>
                        Ingresar
                    </NavLink>
            </nav>
        </>
    )
}
