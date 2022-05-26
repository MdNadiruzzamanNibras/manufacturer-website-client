import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import PurchaseForm from './PurchaseForm';

const PurchaseTool = () => {
   
    const {id} =useParams()
    const [tool, setTool] = useState({})
    const {name, image, shortDescription, orderQuantity, availableQuantity, price} = tool
   const navigate = useNavigate()
   const handleNav=()=>{
    navigate('/purchaseForm')
   }
   useEffect(()=>{
    const url =`http://localhost:5000/tools/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setTool(data))}
    ,[id])
    return (
        <div>
          <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">{name}</h1>
      <p className='text-lg'>Minimum Order:{orderQuantity} </p>
    <p className='text-lg'>Available:{availableQuantity}</p>
    <p className='text-lg'>Price: ${price}</p>
    <p className='text-xs'>{shortDescription}</p>
    
      <button onClick={handleNav} class="btn btn-primary">Get Started</button>
     
    </div>
  </div>
</div>  


  <PurchaseForm tool={tool}
  setTool={setTool}
  ></PurchaseForm>
        </div>
    );
};

export default PurchaseTool;