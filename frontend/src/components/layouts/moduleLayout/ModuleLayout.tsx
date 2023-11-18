import React from 'react';
import ModuleHeader from "../../headers/moduleHeader/ModuleHeader";

function ModuleLayout({children, headerTitle}: { children: React.ReactNode, headerTitle: string }) {
    return (
        <>
            <ModuleHeader title={headerTitle}/>
            <main>
                {children}
            </main>
        </>
    );
}

export default ModuleLayout;