import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';


const SocialLogin = () => {
    const [user, setUser] =useState({})
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

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
  console.log(user);
  const [token]= useToken(user)
  if(token){
    navigate(from, { replace: true });
  }
  return (
   <div>
     <button
        onClick={handleGoogleSignIn}
        className='btn w-full max-w-xs text-white'>
            Google sign in</button>
      
     
     
      
     
    </div>
  );
}

export default SocialLogin;