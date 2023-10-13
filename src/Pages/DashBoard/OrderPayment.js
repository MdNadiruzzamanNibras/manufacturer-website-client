import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1Vt6LtQu2zZJ4yjr19yW0NE3J2asAnRsuZIC8ne6fvuZdWCieVk6SDSQChtKoj9HYWdpVfyCQ6so85WBDIAxkf00bI6sAwzw');
const OrderPayment = () => {
    const {id}= useParams()
    const [orderId, setOrderId] =useState({})
    useEffect(()=>{
        const url =`https://manufacturer-website-t9g0.onrender.com/order/${id}`
        fetch(url, {
            method:'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{ 
            console.log(data);
            setOrderId(data)})}
        ,[id])

          
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p  className="text-success font-bold">Hello, {orderId?.BuyerName}</p>
                    <h2 className="card-title">Please Pay for {orderId?.toolName}</h2>
                    
                    <p>Please pay: ${orderId?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    {
                        orderId && <Elements stripe={stripePromise}>
                        <CheckoutForm orderId={orderId} />
                    </Elements>
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderPayment;