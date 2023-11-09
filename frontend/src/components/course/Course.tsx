import React from 'react';
import './course.css'
import wolf_1 from '../../assets/images/wolfes/wolf_with_mic.png'
import wolf_2 from '../../assets/images/wolfes/wolf_festive.png'
import wolf_3 from '../../assets/images/wolfes/wolf_with_money.png'
import wolf_4 from '../../assets/images/wolfes/wolf_arms_in_pockets.png'
import ICourse from "../../models/ICourse";
import {Link} from "react-router-dom";

function Course(props: ICourse) {
    const images = [wolf_1, wolf_2, wolf_3, wolf_4]
    return (
        <li className='courses__course course'>
            <div className='course__content'>
                <h2 className='course__title'>{props.course_name}</h2>
                <p className='course__description'>{props.about_course}</p>
                <Link to={'/course/' + props.id} className='course__continue-btn'>Продолжить</Link>
            </div>
            <img src={images[props.id % images.length]} alt="Волк" className='course__img'/>
        </li>
    );
}

export default Course;