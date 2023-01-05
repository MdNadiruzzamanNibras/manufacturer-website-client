import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [profile, setprofile]=useState([])
    useEffect(()=>{
        if(user)
       {fetch(`https://manufacturer-website-t9g0.onrender.com/myProfile?email=${user?.email}`,{
         method:'GET',
         headers:{
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
       })
    .then(res=>res.json())
    .then(data => {
      setprofile(data)
    });
  }
    },[user])
   
    const navigate =useNavigate()
    const updateNavigate=()=>{
        navigate('/update')
    }
    return (
        <div className="card mx-auto w-96 bg-base-100 my-6 shadow-xl">
             <h1 className='text-4xl text-purple-700 my-4 text-center'>Profile</h1>
             <div className="card-body items-center text-center">
            <h1  className='text-3xl'>Name:{user.displayName}</h1>
            <h3 >Email:{user.email}</h3>
            <h4>Address:{profile.address}</h4>
            <h5> Phone:{profile.phone}</h5>
            <h5>Profession:{profile.linkedin}</h5>

            <button className='btn w-full max-w-xs text-white' onClick={updateNavigate}>Update</button>
        </div>
        </div>
    );
};

export default Myprofile;