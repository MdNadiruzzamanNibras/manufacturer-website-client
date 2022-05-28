import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const ReviewBuyer = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://pure-depths-02632.herokuapp.com/customerReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl text-indigo-700 text-center my-2'>Customer Review</h2>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(r=><ReviewDetail
                    key={r._id}
                    r={r}
                    >

                    </ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default ReviewBuyer;