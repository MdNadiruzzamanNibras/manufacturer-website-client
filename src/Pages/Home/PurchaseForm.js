import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const  PurchaseForm = ({tool,setTool}) => {
    const [user, loading, error] = useAuthState(auth);
  //   const min = tool?.orderQuantity
  // const max = tool?.availableQuantity
  // const [value, setValue] = useState(1);
  // const [count, setCount] = useState(0);
  // const [Serror, setError] = useState(null);
 
  // function handlePlus() {
  //   if (count < Qty) {
  //     setCount(count + 1);
  //     setError(null);
  //   } else {
  //     setError("No stock");
  //   }
  // }
  // const handleChange = event => {
  //   const value = Math.max(min, Math.min(max, Number(event.target.value)));
  //   setValue(value);}
     const handleOrder=event=>{
        event.preventDefault();
        const price = tool?.price
         const name = tool?.name
         
         const phone = event?.target?.phone?.value
        const quantity = event?.target?.quantity?.value
        console.log(quantity,phone, price, name);
        const order={
            
           toolName :name,
           BuyerName:user?.displayName,
           BuyerEmail:user?.email,
           BuyerPhone: event?.target?.phone?.value,
           price: quantity*price
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Great add your order and see my order page')
            }
            else{
                toast.error('Something is Wrong')
                
            }

        })
     }
    
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <h2  className='text-2xl text-center mt-2 font-bold text-purple-700'>Purchase Form</h2>
  <div className="card-body">
   <form onSubmit={handleOrder}>
   <input type="text" value={tool?.name}   className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={tool?.price}  className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={user?.displayName}   className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={user?.email}   className="input input-bordered w-full max-w-xs" /><br />
   <input type="number" name="phone" placeholder="Phone Number"  className="input input-bordered w-full max-w-xs" /><br />
  <input type="number"  name="quantity" placeholder="Amount of tool"  className="input input-bordered  max-w-xs" /> <br />
      <input type="submit"   className='btn w-full max-w-xs text-white' value="Order Now" />      
      
   </form>
    </div>
  </div>

    );
};

export default  PurchaseForm;