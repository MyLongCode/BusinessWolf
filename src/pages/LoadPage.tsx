import React, {useEffect, useState} from 'react';
import '../css/loadPage.css';
import wolf_festive from '../images/Festive_wolf.png';
import wolf_tuxedo from '../images/Wolf_in_tuxedo.png';

function LoadPage() {
    const [loaded, setLoaded] = useState(false)

    const bgColor = loaded ? "--White" : "--Main";
    const title = loaded ? "Добро пожаловать" : "Безнес волчонок"
    const loadingText = "Learn the basics of the language: make new friends," +
        " plan a family dinner, go shopping and much more! Learn the basics of the language: make new friends," +
        " plan a family dinner, go shopping and much more!"

    document.body.style.backgroundColor = `var(${bgColor})`

    useEffect(() => {
        setInterval(() => {
            setLoaded(true)
        }, 2000)
    }, [])

    return (
        <div>
            <div className={`${loaded ? "loaded" : "loading"} centered`}>
                <div className="load_container_left">
                    {!loaded && <p className="load_subtitle">Бизнес школа</p>}
                    <h1 className="load_title">{title}</h1>
                    {!loaded && <p className="load_text">{loadingText}</p>}
                    {loaded && <p className="load_text">нажмите начать, чтобы погрузиться <br/> в новый мир</p>}
                    {loaded && <a className="start_button" href="/authorization">Начать</a>}
                </div>
                <img src={loaded ? wolf_festive : wolf_tuxedo} alt="Волчонок" width="3000" height="3500"
                     className="load_wolf"/>
            </div>
        </div>
    );
}

export default LoadPage;