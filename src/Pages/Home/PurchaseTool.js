import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';

const PurchaseTool = () => {
   
    const {id} =useParams()
    const [tool, setTool] = useState({})
    const {name, image, shortDescription, orderQuantity, availableQuantity, price} = tool
   
   useEffect(()=>{
    const url =`https://manufacturer-website-t9g0.onrender.com/tools/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setTool(data))}
    ,[id])
    return (
        <div className='flex justify-center items-center h-screen'>
          <div className="card w-96 bg-base-100 my-6 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}  alt="tool" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className=" text-lg text-gray-600 ">Minimum Order: {orderQuantity}</p>
                <p className=" text-lg text-gray-600 ">Available: {availableQuantity}</p>
                <p className="text-2xl font-semibold text-indigo-700 ">${price}</p>
                <p className="text-sm text-gray-600 mb-4">{shortDescription}</p>
    
  </div>
</div>


  <PurchaseForm tool={tool}
  setTool={setTool}
  ></PurchaseForm>
        </div>
    );
};

export default PurchaseTool;