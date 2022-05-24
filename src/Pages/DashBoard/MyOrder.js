import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
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
        console.log('res', res);
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
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          orders?.map((order, index)=><tr  key={order._id}>
            <th>{index+1}</th>
            <td>{order.BuyerName}</td>
            <td>{order.BuyerEmail}</td>
            <td>{order.toolName}</td>
            <td>{order.quantity}</td>
            <td>
            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
            {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};


export default MyOrder;