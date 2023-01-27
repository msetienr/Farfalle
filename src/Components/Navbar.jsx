import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/main.css';
import {FaBars} from 'react-icons/fa';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const menuData = [
        {
            path:'/',
            name:"¿Quienes somos?"
        },
        {
            path:'/Pedidos',
            name:"Pedidos"
        }
    ]
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <nav>
            <h1><label className="logo">LaFarfalle</label></h1>
            <div className="bars">
                <FaBars onClick={(toggle)}/>
            </div>
            <div className="menu" style ={{top: isOpen ? "-100%" : 80}}>
                <button className="login" onClick={() => loginWithRedirect()}>   Iniciar Sesión   </button>
                {menuData.map((item) => (
                    <NavLink to={item.path} key={item.name}>
                        <div className="list_item">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>

        </nav>
        
    );
};

export default Navbar;
