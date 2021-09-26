import React from 'react';
import SignIn from './Socials/signin';
import Facebook from './Socials/facebook';
//import { firebase } from '../Firebase/firebase';
import { useEffect } from 'react';
import { getAuth, signOut } from '@firebase/auth';







const Dashboard = ({history}) => {

const logout = () => {
    signOut(auth)
        .then(() => {
            localStorage.removeItem('token')
            history.push('/')
        })
        .catch((e) => alert(e.message))
}

useEffect(() => {
    const token = localStorage.getItem('token');
   
    if (!token) {
      history.push('/')
    }
       
    
    }, [])

    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <div className="w-full h-screen bg-white">
        <div className="Header">
    <h1>Dashboard</h1>
    <p>{user && user.displayName}</p>
</div>
<div className="m-5">
<SignIn/>
        <Facebook /> 

        <button 
         onClick={logout}
          className="login-btn">
            Logout
        </button>
</div>
        </div>
        

        
    )
        
    
}

export default Dashboard;
