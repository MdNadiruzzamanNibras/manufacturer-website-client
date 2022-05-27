import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewDetail = ({r}) => {
    const {name, buyerReview, rating} = r.review
    return (
        <div className="card w-60 bg-base-100 p-3 my-6 shadow-xl">
            <h2 className='text-2xl font-extrabold'>{name}</h2>
            <p>{buyerReview}</p>
            <p className='text-yellow-500'><Rating
  placeholderRating={rating}
  emptySymbol={<AiOutlineStar ></AiOutlineStar>}
  placeholderSymbol={<AiFillStar></AiFillStar>}
  fullSymbol={<AiFillStar></AiFillStar>}
/></p>
        </div>
    );
};

export default ReviewDetail;