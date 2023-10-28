import {motion} from 'framer-motion';
import React, {useContext, useEffect, useState} from 'react';
import './mainPage.css'
import Course from "../../components/course/Course";
import {observer} from "mobx-react-lite";
import ICourse from "../../models/ICourse";
import {Context} from "../../index";
import CourseService from "../../services/CourseService";

function MainPage() {
    const [courses, setCourses] = useState<ICourse[]>([])
    const {store} = useContext(Context)
    useEffect(() => {
        const response = CourseService.fetchCourses();
        const data = response.then(response => response.data)
        data.then(e => {
            let userCourses: ICourse[] = []
            for (const course of e) {
                if(course.users.includes(store.user.id)) {
                    userCourses.push(course)
                }
            }
            setCourses(userCourses)
        })
    }, [store.user])

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
                            <Course course_name={course.course_name} about_course={course.about_course}
                                    id={course.id} users={course.users} key={course.id}/>
                        )
                    })}
                </ul>
            </motion.div>
        </>
    );
}

export default observer(MainPage);