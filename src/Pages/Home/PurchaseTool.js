import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const PurchaseTool = () => {
    const [user, loading, error] = useAuthState(auth);
    const {id} =useParams()
    const [tool, setTool] = useState({})
    const {name, image, shortDescription, orderQuantity, availableQuantity, price} = tool
   
    useEffect(()=>{
        const url =`http://localhost:5000/tools/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setTool(data))}
        ,[id])
     const handleOrder=event=>{
        event.preventDefault();
        const price = tool.price
         const name = tool.name
        const quantity = event?.target?.quantity?.value
        console.log(quantity);
        const order={
            
           toolName :name,
           BuyerName:user?.displayName,
           BuyerEmail:user?.email,
           BuyerPhone: event?.target?.phone?.value,
           quantity: quantity*price
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
     }
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">{name}</h1>
      <p className='text-lg'>Minimum Order:{orderQuantity} </p>
    <p className='text-lg'>Available:{availableQuantity}</p>
    <p className='text-lg'>Price: ${price}</p>
    <p className='text-xs'>{shortDescription}</p>
    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" /><br />
        
    <input type="number" name="quantity" placeholder="Amount of tool" className="input input-bordered w-full max-w-xs" /><br />
        
      <button onClick={handleOrder} class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default PurchaseTool;