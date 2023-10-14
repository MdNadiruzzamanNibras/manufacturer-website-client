import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const ReviewBuyer = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-website-t9g0.onrender.com/customerReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const newReviews = [...reviews].reverse();

    return (
        <div className='container mx-auto'>
            <div className="p-4 md:p-8 lg:p-12">
            <h2 className="text-4xl text-indigo-700 text-center my-2 font-bold">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {newReviews.slice(0, 4).map((r) => (
                    <ReviewDetail key={r._id} r={r} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default ReviewBuyer;
