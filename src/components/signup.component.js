import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'






export default function SignUp({history}) {
   const [ firstname, setFirstname ] = useState("");
   const [ lastname, setLastname ] = useState("");
   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() => {
    const token = localStorage.getItem('token');
   
    if (token) {
      history.push('/Dashboard')
    }
       
    
    }, [])

   const onSignUp = () => {
       setLoading(true);
    const auth = getAuth();

    

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, { displayName: firstname})
            .then(() => history.push('/'))
            .catch((e) => alert(e.message))

        }).catch((e) => alert(e.message))
        .finally(() => setLoading(false))
   }
        return (
            <form>
                <h3>Register</h3>
{/* FORM */}
                <div className="input-group">
                   
                    <input 
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                    type="text"
                    name="firstname"
                     className="register-input"
                      placeholder="First name" />
                </div>

                <div className="input-group">
                
                    <input 
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    type="text" 
                    name="lastname"
                    className="register-input"
                     placeholder="Last name" />
                </div>

                <div className="input-group">
                    
                    <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email" 
                    className="register-input" 
                    placeholder="Enter email" />
                </div>

                <div className="input-group">
                   
                    <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    name="password" 
                    className="register-input" 
                    placeholder="Enter password" />
                </div>

                <button 
                onClick={onSignUp}
                type="submit" className="register-btn">{ loading ? 'Creating user ...' : 'Register'}</button>
                <p className="forgot-password text-right">
                    Already registered?   <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
        );
    
}