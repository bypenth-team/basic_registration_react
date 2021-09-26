import React from 'react';
//import {firebase} from '../../Firebase/firebase';
import { signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider} from "@firebase/auth";
import { getAuth } from "@firebase/auth";


const SignIn =() => {


  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
    console.log(result);
    }).catch((error) => {
     console.log(error);
    });    
   
  
    return(
      
      <button
      className="login-btn"
       onClick={signInWithPopup}>Sign in with Google</button>
     
    )
  }

  export default SignIn


 







  //const signInWithFirebase =()=>{
      //var provider = new firebase.auth.GoogleAuthProvider();
      //firebase.auth().signInWithPopup(provider)
      ///////.then((re)=>{
      //  console.log(re);
    //  })
      //.catch((err)=>{
       // console.log(err);
     // })
   // }
