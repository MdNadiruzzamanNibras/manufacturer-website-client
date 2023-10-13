import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const  PurchaseForm = ({tool,setTool}) => {
    const [user] = useAuthState(auth);
    const min = tool?.orderQuantity
  const max = tool?.availableQuantity
  // const [value, setValue] = useState(1);
  // const [count, setCount] = useState(0);
  const [error, setError] = useState('');

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
        let quantity = event?.target?.quantity?.value
        
        const order={
            
           toolName :name,
           BuyerName:user?.displayName,
           BuyerEmail:user?.email,
           BuyerPhone: event?.target?.phone?.value,
           price: quantity*price
        }
        console.log(order, 'order');
        fetch('https://manufacturer-website-t9g0.onrender.com/order',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
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
        <div className="card  w-96  ">
            <h2  className='text-2xl text-center mt-2 font-bold text-purple-700'>Purchase Form</h2>
  <div className="card-body">
   <form onSubmit={handleOrder}>
   <input type="text" value={tool?.name}   className="input input-bordered w-full max-w-xs my-4" /><br />
   <input type="text" value={tool?.price}  className="input input-bordered w-full max-w-xs my-2" /><br />
   <input type="text" value={user?.displayName}   className="input input-bordered w-full max-w-xs my-2" /><br />
   <input type="text" value={user?.email}  required  className="input input-bordered w-full max-w-xs my-2" /><br />
   <input type="number" name="phone" required placeholder="Phone Number"  className="input input-bordered w-full max-w-xs my-2" /><br />
  <input type="number"  name="quantity" required placeholder="Amount of tool"  className="input my-2 input-bordered  max-w-xs" /> <br />
      <input type="submit"   className='btn my-2 w-full max-w-xs text-white' value="Order Now" />      
      
   </form>
    </div>
  </div>

    );
};

export default  PurchaseForm;