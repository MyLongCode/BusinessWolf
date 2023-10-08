import { motion } from 'framer-motion';
import React from 'react';
import MainHeader from "../components/MainHeader";

function MainPage() {
    return (
        <>
            <MainHeader/>
            <motion.div
                className="main centered"
                initial={{opacity:0}}
                animate={{opacity:1, transition: {duration: 1.25}}}
                exit={{opacity:0}}
            >

            </motion.div>
        </>
    );
}

export default MainPage;