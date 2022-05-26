import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setorders]= useState([])
    const navigate =useNavigate()
    const [user] = useAuthState(auth);
   
    useEffect(()=>{
       if(user)
       {fetch(`http://localhost:5000/order?email=${user?.email}`,{
         method:'GET',
         headers:{
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
       })
       .then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    })
    .then(data => {
      setorders(data);
    });
  }
        
  },[user])
  const cancelOrder =id=>{
    const processed = window.confirm('Are you sure cancel the order')
    if(processed){
        const url= `http://localhost:5000/order/${id}`
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
    return (
        <div>
            <h3>My order:{orders?.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
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
            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
           
            </td>
            <td><button onClick={()=>cancelOrder(order._id)} className='btn  btn-sm mt-4' >
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