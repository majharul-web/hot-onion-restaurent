import React from "react";
import "./Login.css";
import logo from "../../../images/logo2.png";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { singInUsingGoogle } = useAuth();
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
              <form action=''>
                <input type='email' placeholder='email' className='email-pass-bg' />
                <input type='password' placeholder='password' id='' className='email-pass-bg' />
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
