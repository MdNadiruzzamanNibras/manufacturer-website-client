import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {image, name, shortDescription, orderQuantity, availableQuantity, price,_id}= tool
    const navigate = useNavigate()
    const PurchaseNavigate = id=>{
        navigate(`/tools/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 my-6 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}  alt="tool" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className=" text-lg text-gray-600 ">Minimum Order: {orderQuantity}</p>
                <p className=" text-lg text-gray-600 ">Available: {availableQuantity}</p>
                <p className="text-2xl font-semibold text-indigo-700 ">${price}</p>
                {/* <p className="text-sm text-gray-600 mb-4">{shortDescription}</p> */}
    <div className="card-actions">
      <button onClick={()=>PurchaseNavigate(_id)}className="btn btn-primary bg-indigo-500 hover:bg-indigo-800">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;