
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {

  const [user,loading] = useAuthState(auth);
  
    const [orders, setorders]= useState([])
    
  
    useEffect(()=>{
       if(user)
       {fetch(`https://manufacturer-website-t9g0.onrender.com/myorder?email=${user?.email}`,{
         method:'GET',
         headers:{
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
       })
       .then(res =>  res.json())
    .then(data => {
      setorders(data);
    });
  }
        
  },[user])
  const cancelOrder =id=>{
    const processed = window.confirm('Are you sure cancel the order')
    if(processed){
        const url= `https://manufacturer-website-t9g0.onrender.com/order/${id}`
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
         setorders(remaining);
        })
    }

 }
 if(loading){
  return <Loading></Loading>
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
            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button  className='btn btn-xs btn-success'>pay</button></Link>}
            {(order.price && order.paid) && <div>
                                        <p><span  className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span  className='text-success'>{order.transactionId}</span></p>
                                    </div>}
            </td>
            <td><button onClick={()=>cancelOrder(order._id)}  className='btn  btn-sm mt-4' >
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


export default MyOrder;