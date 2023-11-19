import React from 'react';
import IUser from "../../models/IUser";
import ReviewerAvatar from '../../assets/images/Avatar.jpg'
import './review.css'

interface ReviewProps {
    reviewer?: IUser,
    review: string
}

function Review(props: ReviewProps) {
    return (
        <div className='review'>
            <div className='review__reviewer'>
                <img className='review__reviewer__avatar' src={ReviewerAvatar}
                     alt="Аватар автора" width='1024' height='1024'/>
                <h3 className='review__reviewer__name'>Фамилия Имя</h3>
            </div>
            <p className='review__text'>{props.review}</p>
        </div>
    );
}

export default React.memo(Review);