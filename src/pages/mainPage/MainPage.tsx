import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import './mainPage.css'
import Course from "../../components/course/Course";
import ICourse from "../../models/ICourse";
import CourseService from "../../services/CourseService";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function MainPage() {
    const [courses, setCourses] = useState<ICourse[]>([])
    const {user, isAuth} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (isAuth) {
            const response = CourseService.fetchCourses();
            const data = response.then(response => response.data)
            data.then(e => {
                let userCourses: ICourse[] = [];
                for (const course of e) {
                    if (user && course.users.includes(user.id)) {
                        userCourses.push(course)
                    }
                }
                setCourses(userCourses)
            })
        }
    }, [isAuth])

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

export default MainPage;