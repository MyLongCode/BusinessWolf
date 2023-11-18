import React from 'react';
import {motion} from 'framer-motion';
import MainHeader from "../../headers/mainHeader/MainHeader";

function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <MainHeader/>
            <motion.main
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}
                transition={{duration: 0.2}}
            >
                {children}
            </motion.main>
        </>
    );
}

export default MainLayout;