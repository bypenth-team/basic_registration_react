import React from 'react';

import { getAuth, signInWithPopup, FacebookAuthProvider } from "@firebase/auth";




const provider = new FacebookAuthProvider();

const Facebook =() => {

 
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
console.log(result);
  })
  .catch((error) => {


   console.log(error);
  });
  
    return(
  
      <div class="fb-login-button" data-width="" data-size="small" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">
         <button class ="fb-login-button" onClick={signInWithPopup}>Sign in with Facebook</button>
      </div>
    )
  }

  export default Facebook



  //  const signInWithFacebook =()=>{
    //  var provider = new firebase.auth.FacebookAuthProvider();
//      firebase.auth().signInWithPopup(provider)
  //    .then((re)=>{
    //    console.log(re);
     // })
 //     .catch((err)=>{
   //     console.log(err);
    //  })
   // }//