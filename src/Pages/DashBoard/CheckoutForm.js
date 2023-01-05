import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({orderId}) => {
   
    const {_id, BuyerEmail, BuyerName, price} =orderId
  
    const stripe = useStripe()
    const elements =useElements()
    const [cardError, setcardError]=useState('')
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('')
  
    useEffect(()=>{
        if(orderId){
            fetch('https://manufacturer-website-t9g0.onrender.com/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify({price: orderId?.price})
            })
              .then(res => res.json())
            .then(data=>{
                if (data?.clientSecret)
                {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret);
                }
            
        })
        }


    },[orderId])
    const handleSubmit=async (event)=>{
        event.preventDefault();
    
    if (!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
        return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

    setcardError(error?.message || '')
    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
    clientSecret,
    {
        payment_method: {
            card: card,
            billing_details: {
                name: BuyerName,
                email: BuyerEmail
            },
        },
    },
);
 if(intentError ) {
    setcardError(intentError?.message);
    setProcessing(false);
}
 else{
    setcardError('');
    setTransactionId(paymentIntent.id);
    setSuccess('Congrats! Your payment is completed.')
    const payment = {
        orderId: _id,
        transactionId: paymentIntent.id
    }
    fetch(`https://manufacturer-website-t9g0.onrender.com/order/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
    }).then(res=>res.json())
    .then(data => {
        setProcessing(false);
        console.log(data);
    })

}
    
    
}
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button  className='btn btn-success btn-sm mt-4' type="submit" disabled={!useStripe ||  !clientSecret }>
                    Pay
                </button>
            </form>
            {
                cardError && <p  className='text-red-500'>{cardError}</p>
            }
            {
               
                success && <div  className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span  className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;