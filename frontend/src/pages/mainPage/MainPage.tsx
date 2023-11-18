import React, {useEffect} from 'react';
import './mainPage.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import CoursesList from "../../components/courses/CoursesList";

function MainPage() {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {courses} = useTypedSelector(state => state.courses)
    const {fetchCourses} = useActions()

    useEffect(() => {
        if (isAuth && courses.length === 0) {
            fetchCourses()
        }
        // eslint-disable-next-line
    }, [isAuth, courses.length]);

    return (
        <MainLayout>
            <div className="main">
                <div className="header__greeting greeting">
                    <h1 className='greeting__heading'>Hello, bro</h1>
                    <span className='what-to-learn'>What do you want to learn?</span>
                </div>
                <CoursesList courses={courses}/>
            </div>
        </MainLayout>
    );
}

export default MainPage;