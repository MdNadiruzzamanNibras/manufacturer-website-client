import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const reviewSubmit = event=>{
        event.preventDefault();
        const name = event.target.name.value
        const review = event.target.review.value
        const rating = event.target.rating.value 
        console.log(name, review, rating);
    }
    return (
        <div>
           
            <div class="card w-96  mx-auto min-h-screen shadow-xl image-full">
              
          <div class="card-body">
          <h2 className='text-2xl text-center my-2 text-white'>Add a Review</h2>
           <form onSubmit={reviewSubmit}>
            <input type="text" name="name" placeholder="Your Name"  className="input input-bordered w-full max-w-xs" /><br />
            <textarea class="textarea" name="review" placeholder="Review"></textarea><br />
            <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" /><br />
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