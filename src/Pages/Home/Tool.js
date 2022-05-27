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
    <img src={image} alt="tool" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p  className='text-lg'>Minimum Order:{orderQuantity} </p>
    <p  className='text-lg'>Available:{availableQuantity}</p>
    <p  className='text-lg'>Price: ${price}</p>
    <p  className='text-xs'>{shortDescription}</p>
    <div className="card-actions">
      <button onClick={()=>PurchaseNavigate(_id)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;