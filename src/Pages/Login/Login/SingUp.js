import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo2.png";


const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const {userRegister}=useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userRegister (email, password);
  };

  // get email
  const getEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  // get password
  const getPassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className='banner-login'>
      <div className='container my-5'>
        <div className='row'>
          <div className='col text-center'>
            <img className='w-25' src={logo} alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center align-items-center'>
            <div className='w-25 mt-5'>
              {/* form */}
              <form onSubmit={handleFormSubmit}>
                <input onBlur={getEmail} type='email' placeholder='email' className='email-pass-bg' />

                <input
                  onBlur={getPassword}
                  type='password'
                  placeholder='password'
                  className='email-pass-bg'
                />

                <br />

                <input type='submit' value='Sing Up' className='submit-bg' />
              </form>

              <Link to='/login'>
                <h6 className='text-center text-danger mt-2'>Already have an account?</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
