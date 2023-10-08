import React from 'react';
import '../css/startPage.css';
import wolf_festive from '../images/Festive_wolf.png';
import { motion } from 'framer-motion';

function LoadPage() {
    return (
        <motion.div
            className="start centered"
            initial={{width: "100%", opacity:0}}
            animate={{width: "90%", opacity:1, transition: {duration: 1.25}}}
            exit={{opacity:0}}
        >
            <div className="load_container_left">
                <h1 className="load_title">Добро пожаловать</h1>
                <p className="load_text">нажмите начать, чтобы погрузиться <br/> в новый мир</p>
                <a className="start_button" href="/authorization">Начать</a>
            </div>
            <img src={wolf_festive} alt="Волчонок" width="3000" height="3500" className="load_wolf"/>
        </motion.div>
    );
}

export default LoadPage;