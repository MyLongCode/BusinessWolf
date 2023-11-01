import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import './mainPage.css'
import Course from "../../components/course/Course";
import ICourse from "../../models/ICourse";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

function MainPage() {
    const [courses, setCourses] = useState<ICourse[]>([])
    const {user, isAuth} = useTypedSelector(state => state.auth)
    const {courses: allCourses} = useTypedSelector(state => state.courses)
    const {fetchCourses} = useActions()

    useEffect(() => {
        if (isAuth && allCourses.length === 0) {
            fetchCourses()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, allCourses.length]);

    useEffect(() => {
        if (allCourses) {
            let userCourses: ICourse[] = [];
            for (const course of allCourses) {
                if (user && course.users.includes(user.id)) {
                    userCourses.push(course)
                }
            }
            setCourses(userCourses)
        }
    }, [allCourses, user])

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
                <ul className='courses'>
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