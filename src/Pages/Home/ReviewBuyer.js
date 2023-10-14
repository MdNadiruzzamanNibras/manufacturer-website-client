import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const ReviewBuyer = () => {
    
    const { data: reviews, isLoading, isError} = useQuery('reviews', () => fetch('https://manufacturer-website-t9g0.onrender.com/customerReview').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        return <p>{ 'something wrong'}</p>
   }
    

    const newReviews = [...reviews].reverse();

    return (
        <div className='container mx-auto'>
            <div className="p-4 md:p-8 lg:p-12">
            <h2 className="text-4xl text-indigo-700 text-center my-2 font-bold">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newReviews.slice(0, 3).map((r) => (
                    <ReviewDetail key={r._id} r={r} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default ReviewBuyer;
