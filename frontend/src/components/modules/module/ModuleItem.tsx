import React from 'react';
import './module.css'
import {Link} from "react-router-dom";
import IModule from "../../../models/IModule";

interface ModuleProps {
    module: IModule,
    completeLessons: number,
    totalLessons: number
}

function ModuleItem({module, completeLessons, totalLessons}: ModuleProps) {
    return (
        <li className={'modules__item module'}>
            <Link to={`/course/${module.course}/module/${module.id}/lessons`} className='module__link'>
                <div className='module__wrapper'>
                    <h2 className='module__title'>{'Модуль ' + module.number}</h2>
                    <p className='module__lessons-count'>{`${completeLessons}/${totalLessons} уроков`}</p>
                </div>
            </Link>
        </li>
    );
}

export default ModuleItem;