import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const reviewSubmit = event=>{
        event.preventDefault();
        const review= { name : event.target.name.value,
                buyerReview : event.target.review.value,
                rating : event.target.rating.value ,
        }

        fetch('https://pure-depths-02632.herokuapp.com/review',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({review})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Great add a review')
              
            }
            else{
                toast.error('Oh no try again later')
            }
        })
        event?.reset()
    }
    return (
        <div>
           
            <div className="card w-96  mx-auto min-h-full shadow-xl image-full">
              
          <div className="card-body">
          <h2  className='text-2xl text-center my-2 text-white'>Add a Review</h2>
           <form onSubmit={reviewSubmit}>
            <input type="text" name="name" placeholder="Your Name"   className="input input-bordered w-full text-black max-w-xs" /><br />
            <textarea className="textarea text-black"  name="review" placeholder="Review"></textarea><br />
            <input type="number" name="rating" placeholder="Rating"  className="input input-bordered w-full text-black max-w-xs" /><br />
            <div className="card-actions justify-end">
            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
            </form>
    
   </div>
  </div>
        </div>
    );
};

export default AddReview;