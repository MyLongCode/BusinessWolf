import React, {useEffect, useState} from 'react';
import './test.css'
import ITest from "../../../../models/ITest";
import {Link, useLocation} from "react-router-dom";

interface ITestProps {
    test: ITest,
    lessonNames: string[]
}

function TestItem({test, lessonNames}: ITestProps) {
    const location = useLocation()
    const [lessonsName, setLessonsName] = useState('');

    useEffect(() => {
        for (const name of lessonNames) {
            if (name !== '') {
                setLessonsName(name);
                break
            }
        }
    }, []);

    return (
        <Link to={`${location.pathname}/${test.test_id}`} className='test-link'>
            {
                lessonsName !== '' &&
                <li className='tests__test test'>
                    <h3 className='test__title'>{`${test.name} (${lessonsName})`}</h3>
                    <p className='test__desc'>{test.text}</p>
                    <p className='test__time'>30 мин</p>
                </li>
            }
        </Link>
    );
}

export default React.memo(TestItem);