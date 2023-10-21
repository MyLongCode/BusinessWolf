import React, {useEffect} from 'react';
import '../assets/css/pages/startPage.css';
import wolf_festive from '../assets/images/Festive_wolf(shadow).png';
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
            initial={{width: "100%", opacity:0}}
            animate={{width: "90%", opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.8}}
        >
            <div className="start_container_left">
                <h1 className="start_title">Добро пожаловать</h1>
                <p className="start_text">нажмите начать, чтобы погрузиться <br/> в новый мир</p>
                <button><Link to='/authorization' className="start_button">Начать</Link></button>
            </div>
            <img src={wolf_festive} alt="Волчонок" width="3000" height="3500" className="start_wolf"/>
        </motion.div>
    );
}

export default StartPage;