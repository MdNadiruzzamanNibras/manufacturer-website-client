import React from 'react';
import { useQuery } from 'react-query';

const ManageOrder = () => {
    const {data:orders, isLoading,refetch}= useQuery('orders',()=>fetch('http://localhost:5000/order',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <p>Loading</p>
    }
    return (
        <div>
            <h1>{orders?.length}</h1>
        </div>
    );
};

export default ManageOrder;