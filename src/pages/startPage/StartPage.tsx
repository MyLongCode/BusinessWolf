import React, {useEffect} from 'react';
import './startPage.css';
import wolf_festive from '../../assets/images/Festive_wolf(shadow).png';
import { motion } from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";

function StartPage() {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/main')
        }
    }, [navigate]);

    return (
        <motion.div
            className="start centered"
            initial={{gap: "150px", opacity:0}}
            animate={{gap: "0px", opacity:1, transition: {duration: 1.5}}}
            exit={{opacity:0}}
            transition={{duration: 0.8}}
        >
            <div className="start__container-left">
                <h1 className="start__title">Добро пожаловать</h1>
                <p className="start__text">нажмите начать, чтобы погрузиться <br/> в новый мир</p>
                <button><Link to='/authorization' className="start__button">Начать</Link></button>
            </div>
            <img src={wolf_festive} alt="Волчонок" width="3000" height="3500" className="start__img"/>
        </motion.div>
    );
}

export default StartPage;