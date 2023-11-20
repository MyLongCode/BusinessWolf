import React from 'react';
import IReview from "../../models/IReview";
import ReviewItem from "./review/Review";
import './reviewsList.css'

const ReviewsList = ({reviews}: { reviews: IReview[] }) => {
    return (
        <ul className='reviews'>
            {reviews.map(review => {
                return <ReviewItem key={review.id} review={review}/>
            })}
        </ul>
    );
};

export default ReviewsList;