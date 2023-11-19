import React from 'react';
import {motion} from "framer-motion";
import "./sliderButton.css"

interface ISliderButtonProps {
    className: string
    buttonNames: { left: string, right: string }
    initialState: "left" | "right"
    currentState: "left" | "right" | ""
    buttonClickHandler: (state: "left" | "right") => void
}

function SliderButton({className, initialState, currentState, buttonClickHandler, buttonNames}: ISliderButtonProps) {
    return (
        <div className={`${className} slider-btn`}>
            <motion.div
                className="slider-btn__slider"
                initial={initialState}
                animate={currentState}
                variants={{
                    left: {right: "49%"},
                    right: {right: "1%"}
                }}
                transition={{duration: 0.2, ease: "easeIn"}}
            />
            <button
                className={
                    `slider-btn__lessons btn ${
                        currentState === "left" || initialState === "left" ? 'slider-btn_active' : ''}`}
                onClick={() => buttonClickHandler("left")}
            >
                {buttonNames.left}
            </button>
            <button
                className={
                    `slider-btn__tests btn ${
                        currentState === "right" || initialState === "right" ? 'slider-btn_active' : ''}`}
                onClick={() => buttonClickHandler("right")}
            >
                {buttonNames.right}
            </button>
        </div>
    );
}

export default React.memo(SliderButton);