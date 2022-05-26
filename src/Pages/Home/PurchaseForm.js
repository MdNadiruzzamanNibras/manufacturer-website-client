import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const  PurchaseForm = ({tool,setTool}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
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
           quantity: quantity*price
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
     }
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
   <form onSubmit={handleOrder}>
   <input type="text" value={tool?.name}  className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={tool?.price} className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={user?.displayName}  className="input input-bordered w-full max-w-xs" /><br />
   <input type="text" value={user?.email}  className="input input-bordered w-full max-w-xs" /><br />
   <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" /><br />
  <input type="number" name="quantity" placeholder="Amount of tool" className="input input-bordered w-full max-w-xs" /><br />
      <input type="submit" className='btn w-full max-w-xs text-white' value="Buy Now" />      
      
   </form>
    </div>
  </div>

    );
};

export default  PurchaseForm;