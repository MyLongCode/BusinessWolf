import React from 'react';
import './module.css'
import {Link} from "react-router-dom";

interface ModuleProps {
    id: number,
    courseNumber: number,
    completeLessons: number,
    totalLessons: number
}

function Module({id, courseNumber, completeLessons, totalLessons}: ModuleProps) {
    return (
        <li className={'modules__item module' + (courseNumber !== 1 ? ' module_disabled' : '')}>
            <Link to={`/module/${id}/notes`} className='module__link'>
                <div className='module__wrapper'>
                    <h2 className='module__title'>{'Модуль ' + courseNumber}</h2>
                    <p className='module__lessons-count'>{`${completeLessons}/${totalLessons} уроков`}</p>
                </div>
            </Link>
        </li>
    );
}

export default Module;