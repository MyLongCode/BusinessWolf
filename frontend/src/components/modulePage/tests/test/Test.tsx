import React from 'react';
import './test.css'
import ITest from "../../../../models/ITest";

interface ITestProps{
    test: ITest,
    lesson_names: string[]
}

function Test(props: ITestProps) {
    let lesson_name = ''
    for (const name of props.lesson_names) {
        if (name !== '') {
            lesson_name = name;
            break
        }
    }

    return (
        <li className='tests__test test'>
            <h3 className='test__title'>{`Тест ${props.test.id} (${lesson_name})`}</h3>
            <p className='test__desc'>{props.test.text}</p>
            <p className='test__time'>30 мин</p>
        </li>
    );
}

export default Test;