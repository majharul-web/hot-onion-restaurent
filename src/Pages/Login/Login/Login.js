import React, { useState } from "react";
import "./Login.css";
import logo from "../../../images/logo2.png";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  // manual login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login method import
  const { singInUsingGoogle, userLogin } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password);
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
              {/* login form */}
              <form onSubmit={handleFormSubmit}>
                <input onBlur={getEmail} type='email' placeholder='email' className='email-pass-bg' />

                <input
                  onBlur={getPassword}
                  type='password'
                  placeholder='password'
                  className='email-pass-bg'
                />

                <br />
                <input type='submit' value='Sing In' className='submit-bg' />
              </form>

              <h5 className='text-center'>or</h5>
              <div className='d-flex justify-content-evenly flex-wrap'>
                <button onClick={singInUsingGoogle} className='btn btn-danger '>
                  <span className='mx-2'>
                    <i className='fab fa-google'></i>
                  </span>
                  Google
                </button>
                <button className='btn btn-primary'>
                  <span className='mx-2'>
                    <i className='fab fa-facebook'></i>
                  </span>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
