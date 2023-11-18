import React from 'react';
import './test.css'
import ITest from "../../../../models/ITest";
import {Link, useLocation} from "react-router-dom";

interface ITestProps {
    test: ITest,
    lessonNames: string[]
}

function TestItem({test, lessonNames}: ITestProps) {
    const location = useLocation()

    let lesson_name = ''
    for (const name of lessonNames) {
        if (name !== '') {
            lesson_name = name;
            break
        }
    }

    return (
        <Link to={`${location.pathname}/${test.id}`} className='test-link'>
            {
                lesson_name &&
                <li className='tests__test test'>
                    <h3 className='test__title'>{`Тест ${test.id} (${lesson_name})`}</h3>
                    <p className='test__desc'>{test.text}</p>
                    <p className='test__time'>30 мин</p>
                </li>
            }
        </Link>
    );
}

export default TestItem;