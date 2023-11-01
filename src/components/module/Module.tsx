import React from 'react';
import './module.css'

interface ModuleProps {
    courseNumber: number,
    completeLessons: number,
    totalLessons: number
}

function Module({courseNumber, completeLessons, totalLessons}: ModuleProps) {
    return (
        <li className='module'>
            <h2 className='module__title'>{'Модуль ' + courseNumber}</h2>
            <p className='module__lessons-count'>{`${completeLessons}/${totalLessons} уроков`}</p>
        </li>
    );
}

export default Module;