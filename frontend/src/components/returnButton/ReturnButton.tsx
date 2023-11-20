import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './retunButton.css'

const ReturnButton = ({text}: {text: string}) => {
    const navigate = useNavigate()

    return (
        <Link to='' onClick={() => navigate(-1)} className='return-btn'>
            <span className='return-btn__arrow arrow'/>
            <p className='return-btn__text'>{text}</p>
        </Link>
    );
};

export default ReturnButton;