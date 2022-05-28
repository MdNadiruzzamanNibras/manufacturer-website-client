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
   
   useEffect(()=>{
    const url =`https://pure-depths-02632.herokuapp.com/tools/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setTool(data))}
    ,[id])
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p  className='text-lg'>Minimum Order:{orderQuantity} </p>
    <p  className='text-lg'>Available:{availableQuantity}</p>
    <p  className='text-lg'>Price: ${price}</p>
    <p  className='text-xs'>{shortDescription}</p>
    
     
     
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