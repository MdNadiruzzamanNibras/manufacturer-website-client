import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

  
  const [token]= useToken(user)
  if(token){
    navigate(from, { replace: true });
  }
  if(loading){
    return <Loading/>
  }
  let errorMessage;
    if(error ){
      errorMessage= <p className='text-red-600'>{error?.message}</p>
    }
  return (
   <div>
     
      
            <button
         onClick={() => signInWithGoogle()}
         className='btn w-full max-w-xs text-white'>
            Google sign in</button>
     
            {errorMessage}
     
    </div>
  );
}

export default SocialLogin;