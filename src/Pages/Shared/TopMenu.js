import React from 'react';
import logo from '../../images/logo2.png';
import './TopMenu.css'

const TopMenu = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img className='logo-image' src={logo} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">
                            <span><i class="fas fa-shopping-cart"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <button className='sing-up-button' >Sing up</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopMenu;