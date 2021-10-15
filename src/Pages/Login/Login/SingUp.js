import React from "react";
import logo from "../../../images/logo2.png";

const SingUp = () => {
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
                <input type='submit' value='Sing Up' className='submit-bg' />
              </form>

              <h6 className='text-center text-danger mt-2'>Already have an account?</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
