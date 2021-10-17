import React, { useState } from "react";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";


const Login = () => {
  // manual login state
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLogeIn, setIsLogeIn] = useState(false);


  //login method import
  const { userRegister, userLogin, singInUsingGoogle, } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // password validation
    if (password.length < 6) {
      setError('please type 6 or longer password');
      return;
    }

    if (isLogeIn) {
      userLogin(email, password);
      setError('');
      setFeedback('User Login Success! ');
    }
    else {
      userRegister(email, password, name);
      setError('');
      setFeedback('Registration Done ');

    }


  };

  // handle checked 
  const handleChecked = (e) => {
    setIsLogeIn(e.target.checked);
  }
  // get name
  const getName = (e) => {
    setName(e.target.value);
  }

  // get email
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  // get password
  const getPassword = (e) => {
    setPassword(e.target.value);
  };


  // ------------------redirect
  const location = useLocation();
  const history = useHistory();

  // console.log("came from", location.state?.from);

  const redirect_url = location.state?.from || "/home";

  const handleGoogleSingIN = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_url);
      console.log(result.user);
    });
  };

  return (
    <div className='banner-login'>
      <div className='container my-5'>

        <div className='row'>
          <div className='col d-flex justify-content-center align-items-center'>
            <div className='w-25 mt-5'>
              <h3 className='text-center text-success'>{feedback}</h3>
              {/* login form */}
              <form onSubmit={handleFormSubmit}>
                <h3 className='text-danger mb-2 text-center'> {isLogeIn ? 'Please login' : 'Please Register'} </h3>

                {!isLogeIn && <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                  <input type="text" onBlur={getName} className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Enter Your Name' required />

                </div>}

                {/*email field  */}
                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    onBlur={getEmail}
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter Your Email'
                    required
                  />

                </div>

                {/* password field */}
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    onBlur={getPassword}
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Enter Your Password'
                    required
                  />
                </div>

                {/* checked button */}
                <div className="mb-3 form-check">
                  <input type="checkbox" onClick={handleChecked} className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1"> Already Register</label>
                </div>

                {/* show error */}
                <h3 className='text-danger'>{error}</h3>



                <div className="d-grid ">
                  <button type="submit" className="btn btn-danger btn-lg btn-block">{isLogeIn ? 'Login' : 'Register'}</button>

                </div>

              </form>

              <h5 className='text-center'>or</h5>

              {/* social login */}
              <div className='d-flex justify-content-evenly flex-wrap'>
                {/* google sing in */}
                <button onClick={handleGoogleSingIN} className='btn btn-danger '>
                  <span className='mx-2'>
                    <i className='fab fa-google'></i>
                  </span>
                  Google
                </button>

                {/* facebook sing in */}
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
