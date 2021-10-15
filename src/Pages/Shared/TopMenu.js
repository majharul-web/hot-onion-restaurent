import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='home'>
          <img className='logo-image' src={logo} alt='' />
        </Link>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <a href='/'>
              <span>
                <i className='fas fa-shopping-cart'></i>
              </span>
            </a>
          </li>
          <li>
            <Link to='login'>Login</Link>
            {/* <a href='#'>Login</a> */}
          </li>
          <li>
            <Link to='/singUp'>
              <button className='sing-up-button'>Sing up</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
