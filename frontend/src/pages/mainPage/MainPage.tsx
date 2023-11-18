import React, {useEffect} from 'react';
import './mainPage.css'
import Course from "../../components/course/Course";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";

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
        <MainLayout>
            <div className="main">
                <div className="header__greeting greeting">
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
            </div>
        </MainLayout>
    );
}

export default MainPage;