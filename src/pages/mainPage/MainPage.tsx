import {motion} from 'framer-motion';
import React from 'react';
import './mainPage.css'
import courses from "../../test_jsons/courses.json"
import Course from "../../components/course/Course";

function MainPage() {
    return (
        <>
            <motion.div
                className="main"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1.25}}}
                exit={{opacity: 0}}
            >
                <div className="greeting">
                    <h1 className='greeting__heading'>Hello, bro</h1>
                    <span className='what-to-learn'>What do you want to learn?</span>
                </div>
                <ul className='courses-container'>
                    {courses.map(course => {
                        return (
                            <Course title={course.title} description={course.description} id={course.id} key={course.id}/>
                        )
                    })}
                </ul>
            </motion.div>
        </>
    );
}

export default MainPage;