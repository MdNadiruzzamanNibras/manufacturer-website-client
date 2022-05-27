import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [profile, setprofile]=useState([])
    useEffect(()=>{
        if(user)
       {fetch(`http://localhost:5000/myProfile?email=${user?.email}`,{
         method:'GET',
         headers:{
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
       })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
    });
  }
    },[])
   
    const navigate =useNavigate()
    const updateNavigate=()=>{
        navigate('/update')
    }
    return (
        <div className="card w-96 bg-base-100 my-6 shadow-xl">
             <div className="card-body items-center text-center">
            <h1  className='text-2xl'>{user.displayName}</h1>
            <h3>{user.email}</h3>
            <button onClick={updateNavigate}>Update</button>
        </div>
        </div>
    );
};

export default Myprofile;