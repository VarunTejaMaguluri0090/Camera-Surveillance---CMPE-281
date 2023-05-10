import React, {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import './script.js';
import './style.css';

function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const {maintain, admin, user} = props;
  
    const containerRef = useRef(null);
  
    useEffect(() => {
      containerRef.current.classList.add('sign-in');
    }, []);
  
    const toggle = () => {
      containerRef.current.classList.toggle('sign-in');
      containerRef.current.classList.toggle('sign-up');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     
      // Send login request to server with username and password
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // Set user token in local storage and redirect to home page
        const res = await response.json();
        const { token, isAdmin, isMaintainace } = res;

        console.log(res);
        localStorage.setItem('userToken', token);
        localStorage.setItem('isAdmin', isAdmin);
        localStorage.setItem('isMaintainace', isMaintainace);

        maintain(isMaintainace);
        admin(isAdmin);
        user(token);

        navigate('/home');
      } else {
        // Handle login error
        
        console.error('Login error:', response.status);
      }
    };

    const handleSignUpSubmit = async (e) => {
      e.preventDefault();
      // Send login request to server with username and password
      const response = await fetch('http://localhost:3002/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let data = await response.json();
      console.log(data.message)
      if (data.message) {
        console.log("@@#$#")
        // Set user token in local storage and redirect to home page
        // containerRef.current.classList.toggle('sign-in');
        toggle()


        // navigate('/login');
      } else {
        // Handle login error
        console.error('Login error:', response.status);
      }
    };

  return (
    <div id="login-container" className="login-container" ref={containerRef}>
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
        <form onSubmit={handleSignUpSubmit}>
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Confirm password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit">Sign Up</button>

              <p>
                <span>
                  Already have an account?
                </span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
          </form>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        
          <div className="col align-items-center flex-col sign-in">
          <form onSubmit={handleSubmit}>
          <h1 className="heading-correction">Camera Surveillance Dashboard</h1>
            <div className="form-wrapper align-items-center">
              
              <div className="form sign-in">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="EditButton1">Log In</button>
                {/* <Link className='btn-cust' to={"/home"}>
                  Sign in
                </Link> */}
                <p>
                 
                </p>
                <p>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
            </div>
            </form>
          </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>
              Welcome User!
            </h2>
          </div>
          
          <div className="img sign-in">
            
          </div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
          </div>
          <div className="text sign-up">
            
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
}

export default LoginScreen;
