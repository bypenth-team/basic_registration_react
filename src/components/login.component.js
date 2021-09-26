import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.css";
import { firebase } from '../Firebase/firebase';
import SignIn from "./Socials/signin";
import Facebook from "./Socials/facebook";
import Dashboard from "./Dashboard";
import {getAuth, signInWithEmailAndPassword} from '@firebase/auth';



export default function Login ({history}) {

 const [ email, setEmail ] = useState("");
 const [ password, setPassword ] = useState("");
 const [ loading, setLoading ] = useState(false);  


 useEffect(() => {
 const token = localStorage.getItem('token');

 if (token) {
   history.push('/dashboard')
 }
    
 
 }, [])

 const onLogin = () => {
   setLoading(true)
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    localStorage.setItem('token', userCredential._tokenResponse.idToken);
    history.push('/Dashboard')
  })
  .catch(e=> alert(e.message))
  .finally(() => setLoading(false))
 }


    return (
      //logo position
      <form>
        <div className="header">
          <span className="header-span">JAVA</span>script
        </div>

        <br />
        <br />
        <br />
        {/*TEXT CONTENT AT THE TOP OF THE FORM */}
        <h2>Welcome Back!</h2>
        <p>
          It is a long established fact that a reader will be <br />
          distracted by the readable content.
        </p>
        <br />
        <br />
        {/*FORM */}
        <div className="box">
          <div className="input-group">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="username"
              className="login-input"
              placeholder="Email Address"
            />
          </div>

          <div className="input-group">
            <input  
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              className="login-input"
              placeholder="Passwords"
            />
          </div>

          <div className="form-group">
            <p className="forgot-password text-right">Forgot password?</p>
          </div>
        </div>

        <button
        onClick={onLogin}
        
          type="submit" className="login-btn">
         
          {loading ? 'Logging you in ...' : 'LOGIN'}
        </button>
        <br />
        <button>
          <Router>
            <Switch>
              <Route path="/" component={SignIn}/>
            </Switch>
          </Router>
        </button>
        <br />
        <button>
          <Router>
            <Switch>
              <Route path="/" component={Facebook}/>
            </Switch>
          </Router>
        </button>
        <br/>
        <span className="noacct">Don't have an account?</span>
        <p className="signupright">
          <Link className="nav-link" to={"/sign-up"}>
            SIGN UP
          </Link>
        </p>

{/*FOOTER */}
        <div className="footer">
          <footer>
            All rights reserved by <span className="header-span">JAVA</span>
            script
          </footer>
        </div>
      </form>
    );
  
}
