import React from 'react';
import '../css/startPage.css';
import wolf_festive from '../images/Festive_wolf.png';

function LoadPage() {
    return (
        <div className="start centered">
            <div className="load_container_left">
                <h1 className="load_title">Добро пожаловать</h1>
                <p className="load_text">нажмите начать, чтобы погрузиться <br/> в новый мир</p>
                <a className="start_button" href="/authorization">Начать</a>
            </div>
            <img src={wolf_festive} alt="Волчонок" width="3000" height="3500" className="load_wolf"/>
        </div>
    );
}

export default LoadPage;