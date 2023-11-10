import {motion} from 'framer-motion';
import React, {useEffect} from 'react';
import './mainPage.css'
import Course from "../../components/course/Course";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

function MainPage() {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {courses} = useTypedSelector(state => state.courses)
    const {fetchCourses} = useActions()

    useEffect(() => {
        if (isAuth && courses.length === 0) {
            fetchCourses()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, courses.length]);

    return (
        <>
            <motion.div
                className="main"
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.75}}}
                exit={{opacity: 0}}
            >
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