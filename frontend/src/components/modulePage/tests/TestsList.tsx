import React from 'react';
import ITest from "../../../models/ITest";
import TestItem from "./test/TestItem";
import ILesson from "../../../models/ILesson";

function TestsList({moduleID, tests, lessons}: { moduleID: number, tests: ITest[], lessons: ILesson[] }) {
    return (
        <ul className='tests'>
            {tests.length > 0 && tests.map(test => {
                return <TestItem key={test.test_id} lessonNames={lessons.map(lesson => {
                    return lesson.module === moduleID && lesson.lesson_id === test.lesson ? lesson.name : ''
                })} test={test}/>
            })}
        </ul>
    );
}

export default TestsList;