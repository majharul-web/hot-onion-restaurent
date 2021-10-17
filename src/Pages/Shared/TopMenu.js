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
            <Link to='/cart'>
              <i className='fas fa-shopping-cart'></i>
            </Link>
          </li>
          <li>
            {user.email ? (
              <Link to='login'>
                <button onClick={logOut} className='sing-up-button'>
                  Sing Out
                </button>
              </Link>
            ) : (
              <Link to='/login'>
                <button className='sing-up-button'>Sing up</button></Link>
            )}
          </li>
          <li>{
            user?.email && <a href="/">
              Sing In As <span className='fw-bold text-primary'>{user?.displayName}</span>
            </a>}

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
