import React, { useState } from "react";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  // manual login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLogeIn, setIsLogeIn] = useState(false);

  //login method import
  const { userRegister, userLogin, restPassword, singInUsingGoogle } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // password validation
    if (password.length < 6) {
      setError('please type 6 or longer password')
      return;
    }

    if (isLogeIn) {
      userLogin(email, password)
      setError('')
      setFeedback('User Login Success! ')
    }
    else {
      userRegister(email, password);
      setError('')
      setFeedback('Registration Done ')
    }


  };

  // reset pass
  const restPasswordHandler = (email) => {
    restPassword(email)
  }

  // handle checked 
  const handleChecked = (e) => {
    setIsLogeIn(e.target.checked)
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

  console.log("came from", location.state?.from);

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
                <h3 className='text-primary mb-2'> {isLogeIn ? 'Please login' : 'Please Register'} </h3>

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
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
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
                  <label className="form-check-label" htmlFor="exampleCheck1">already login</label>
                </div>

                {/* show error */}
                <h3 className='text-danger'>{error}</h3>

                <button type="submit" className="btn btn-primary">{isLogeIn ? 'Login' : 'Register'}</button>

                {/* reset password button */}
                <button type="submit" onClick={restPasswordHandler} className="btn btn-danger btn-sm mx-3">reset password</button>
              </form>

              <h5 className='text-center'>or</h5>
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
