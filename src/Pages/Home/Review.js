import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/customerReview')
        .then(res=>res.json())
        .then(data=> {console.log(data)
        
        setReviews(data)})
    },[])
    console.log(reviews);
    return (
        <div>
            <h2 >Customer Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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

export default Review;