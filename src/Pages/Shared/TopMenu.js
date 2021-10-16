import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./TopMenu.css";

const TopMenu = () => {
  const { user, logOut } = useAuth();
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
            {user.email ? (
              <Link to='login'>
                <button onClick={logOut} className='sing-up-button'>Sing Out</button>
              </Link>
            ) : (
              <Link to='login'>Sing In</Link>
            )}
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
