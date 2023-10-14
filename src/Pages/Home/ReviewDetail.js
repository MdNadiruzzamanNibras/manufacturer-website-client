import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import men from '../../images/avater/man.jpg'
const ReviewDetail = ({r}) => {
    const {name, buyerReview, rating} = r.review
    return (
        <div className="card w-96 h-60 bg-base-100 py-3 px-4 my-6 shadow-xl">
            <div >
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={men} alt="Avatar" />
                    </div>
                    
                </div>
                <p>{buyerReview}</p>
                <p className='text-yellow-500'>
                    {/* Assuming <Rating> is a valid React component */}
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<AiOutlineStar />}
                        placeholderSymbol={<AiFillStar />}
                        fullSymbol={<AiFillStar />}
                    />
                </p>
            </div>
        </div>
    );
};

export default ReviewDetail;