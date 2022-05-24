import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';


const SocialLogin = () => {
    const [user, setUser] =useState({})

  const googleProvider = new GoogleAuthProvider();
  
  const handleGoogleSignIn =()=>{
   signInWithPopup(auth, googleProvider)
   .then((result)=>{
    const user = result.user;
    setUser(user)
    
   })
   .catch((error) => {
     console.log('error', error)
   })
  }
  
  const [token]= useToken(user)
  if(token){
      console.log(user);
  }
  return (
   <div>
      
      <button onClick={handleGoogleSignIn}>Google sign in</button>
     
      
     
    </div>
  );
}

export default SocialLogin;