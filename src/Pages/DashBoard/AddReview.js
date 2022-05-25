import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const reviewSubmit = event=>{
        event.preventDefault();
        const review= { name : event.target.name.value,
                buyerReview : event.target.review.value,
                rating : event.target.rating.value ,
        }

        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({review})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
           
            <div class="card w-96  mx-auto min-h-full shadow-xl image-full">
              
          <div class="card-body">
          <h2 className='text-2xl text-center my-2 text-white'>Add a Review</h2>
           <form onSubmit={reviewSubmit}>
            <input type="text" name="name" placeholder="Your Name"  className="input input-bordered w-full max-w-xs" /><br />
            <textarea class="textarea text-black"  name="review" placeholder="Review"></textarea><br />
            <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full text-black max-w-xs" /><br />
            <div class="card-actions justify-end">
            <input class="btn btn-primary" type="submit" value="Submit" />
            </div>
            </form>
    
   </div>
  </div>
        </div>
    );
};

export default AddReview;