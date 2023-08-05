import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Allorder from './Allorder';

const ManageOrder = () => {
  const [order, setorder] =useState([])
    const {data:orders, isLoading}= useQuery('orders',()=>fetch('https://manufacturer-website-server-mdnadiruzzamannibras.vercel.app/order',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <p>Loading...</p>
    }
    
    const cancelOrder =id=>{
      const processed = window.confirm('Are you sure cancel the order')
      if(processed){
          const url= `https://manufacturer-website-server-mdnadiruzzamannibras.vercel.app/allorder/${id}`
          fetch(url,{
              method:'DELETE',
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
             
          })
          .then(res=> res.json())
          .then(data=>{
            toast(data);
           const remaining = orders.filter(order => order._id !== id);
           setorder(remaining);
          })
      }
  
   }  
   const handleShift = ()=>{
     toast('shift the product')
   }
    return (
        <div>
            <h3>My order:{orders?.length}</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Cancel </th>
       
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
         orders && orders?.map((order, index)=><tr  key={order._id}>
            <th>{index+1}</th>
            <td>{order.BuyerName}</td>
            <td>{order.BuyerEmail}</td>
            <td>{order.toolName}</td>
            <td>{order.price}</td>
            
            <td>
            {(order.price && !order.paid) &&  <button  className='btn btn-xs btn-sm'>Unpaid</button>}
             { 
             
            //(!handleShift) ?
             (order.price && order.paid) && 
                  <button onClick={handleShift} className='btn btn-xs btn-sm btn-success'>Pending</button>  
                  // :
                  
                    //  <button  className='btn btn-xs btn-sm btn-success'>Shift</button>
                   }
            </td>
            <td><button onClick={()=>cancelOrder(order._id)}  className='btn  btn-sm ' >
                  Cancel
                </button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;