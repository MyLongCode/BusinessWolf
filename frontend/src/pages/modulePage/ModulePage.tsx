import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./modulePage.css"
import Lessons from "../../components/modulePage/lessons/Lessons";
import Tests from "../../components/modulePage/tests/Tests";
import {motion} from 'framer-motion';
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";

type ModuleParams = {
    id: string,
    courseID: string
}

enum States {
    lessons,
    tests
}

const sliderButtonVariants = {
    left: {right: "49%"},
    right: {right: "1%"}
}

function ModulePage() {
    const {id, courseID} = useParams<ModuleParams>()
    const location = useLocation()
    const navigate = useNavigate()
    const currentState = location.pathname.split('/')[5] === 'tests' ? States.tests : States.lessons;
    const [stateChanged, setStateChanged] = useState(false);

    useEffect(() => {
        if (!['tests', 'lessons'].includes(location.pathname.split('/')[5])) {
            navigate(`/course/${courseID}/module/${id}/lessons`, {replace: true})
        }
    }, [courseID, id, location.pathname, navigate]);

    const sliderButtonClickHandler = (state: States) => {
        setStateChanged(currentState !== state)
        navigate(`/course/${courseID}/module/${id}/${state === States.tests ? 'tests' : 'lessons'}`, {
            replace: true,
        })
    }

    return (
        <ModuleLayout headerTitle={`Модуль ${id}`}>
            <div className='module-page'>
                <div className={"module-page__change-btn change-btn"}>
                    <motion.div
                        className="change-btn__slider"
                        initial={currentState === States.lessons ? "left" : "right"}
                        animate={stateChanged && currentState === States.lessons ? "right" : stateChanged ? "left" : ""}
                        variants={sliderButtonVariants}
                        transition={{duration: 0.2, ease: "easeIn"}}
                    />
                    <button
                        className={`change-btn__lessons ${currentState === States.lessons ? 'change-btn_active' : ''}`}
                        onClick={() => sliderButtonClickHandler(States.lessons)}
                    >
                        Конспекты
                    </button>
                    <button
                        className={`change-btn__tests ${currentState === States.tests ? 'change-btn_active' : ''}`}
                        onClick={() => sliderButtonClickHandler(States.tests)}
                    >
                        Тесты
                    </button>
                </div>
                <motion.div
                    className="module__content"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                >
                    {currentState === States.lessons && <Lessons moduleID={Number(id)}/>}
                    {currentState === States.tests && <Tests moduleID={Number(id)}/>}
                </motion.div>
            </div>
        </ModuleLayout>
    );
}

export default ModulePage;