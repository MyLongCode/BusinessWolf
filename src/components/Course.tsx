import React from 'react';
import '../css/course.css'
import wolf_1 from '../images/wolfes/wolf_with_mic.png'
import wolf_2 from '../images/wolfes/wolf_festive.png'
import wolf_3 from '../images/wolfes/wolf_with_money.png'
import wolf_4 from '../images/wolfes/wolf_arms_in_pockets.png'

export interface ICourse{
    title: string
    description: string
    id: number
}

function Course(props: ICourse) {
    const images = [wolf_1, wolf_2, wolf_3, wolf_4]
    return (
        <li className='course'>
            <div className='circle'/>
            <div className='course_container'>
                <h2 className='course_title'>{props.title}</h2>
                <p className='course_description'>{props.description}</p>
                <button className='button sing_up_button'>Записаться</button>
            </div>
            <img src={images[props.id % images.length]} alt="Волк" className='course_wolf'/>
        </li>
    );
}

export default Course;