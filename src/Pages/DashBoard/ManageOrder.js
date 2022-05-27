import React from 'react';
import { useQuery } from 'react-query';
import Allorder from './Allorder';

const ManageOrder = () => {
    const {data:orders, isLoading}= useQuery('orders',()=>fetch('http://localhost:5000/order',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <p>Loading...</p>
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
            {(order.price && order.paid) && 
                <button  className='btn btn-xs btn-sm btn-success'>Pending</button>
                                        
                                    }
            </td>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;