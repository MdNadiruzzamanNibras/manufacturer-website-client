import React from 'react';
import { useQuery } from 'react-query';

const ManageOrder = () => {
    const {data:orders, isLoading}= useQuery('orders',()=>fetch('http://localhost:5000/order',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <p>Loading</p>
    }
    console.log(orders);
    return (
        <div>
            <h1>{orders?.length}</h1>
        </div>
    );
};

export default ManageOrder;