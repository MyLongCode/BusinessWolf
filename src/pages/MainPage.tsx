import {motion} from 'framer-motion';
import React from 'react';
import MainHeader from "../components/MainHeader";
import '../css/mainPage.css'
import courses from "../test_jsons/courses.json"
import Course from "../components/Course";

function MainPage() {
    return (
        <>
            <MainHeader/>
            <motion.div
                className="main"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1.25}}}
                exit={{opacity: 0}}
            >
                <h1 className='greeting'>Hello, bro</h1>
                <span className='what_to_learn'>What do you want to learn?</span>
                <ul className='courses_container'>
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