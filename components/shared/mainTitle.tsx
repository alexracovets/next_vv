'use client';

import React from 'react';

interface Props {
    className?: string;
}

export const MainTitle: React.FC<React.PropsWithChildren<Props>> = () => {
    return (
        <>
            <div className="
                relative border-[0.2rem] border-regal-beige w-[65rem] h-[65rem] max-h-[77dvh] mx-auto p-[0.5rem]
                before:content-['•'] before:absolute before:absolute before:left-[0.5rem] before:top-[0.5rem] before:flex before:justify-center before:items-center before:text-regal-beige before:border-[0.2rem] before:border-regal-beige before:w-[1.4rem] before:h-[1.4rem]
                after:content-['•'] after:absolute after:absolute after:right-[0.5rem] after:top-[0.5rem] after:flex after:justify-center after:items-center after:text-regal-beige after:border-[0.2rem] after:border-regal-beige after:w-[1.4rem] after:h-[1.4rem]
                max-md:w-[35rem] max-md:h-[35rem]
                bg-regal-bg-logo
            ">
                <div className="
                    relative border-[0.2rem] border-regal-beige px-[4rem] w-full h-full flex justify-center items-center flex-col
                    before:content-['•'] before:absolute before:absolute before:left-[-0.1rem] before:bottom-[-0.1rem] before:flex before:justify-center before:items-center before:text-regal-beige before:border-[0.2rem] before:border-regal-beige before:w-[1.4rem] before:h-[1.4rem]
                    after:content-['•'] after:absolute after:absolute after:right-[-0.1rem] after:bottom-[-0.1rem] after:flex after:justify-center after:items-center after:text-regal-beige after:border-[0.2rem] after:border-regal-beige after:w-[1.4rem] after:h-[1.4rem]
                    max-md:h-[33.6rem] max-md:p-[2rem]
                ">
                    <h1 className="
                        text-[15rem] text-center text-regal-white font-playfair font-[600] uppercase mb-[4rem] max-md:mb-[3rem] max-md:text-[3.2rem]max-md:text-[9rem]
                        max-md:text-[9rem]
                    ">
                        А<span className="italic">Ф</span>ОН
                    </h1>
                    <div className="
                        text-[5.5rem] uppercase text-center text-regal-white font-[600] font-spectral mb-[4rem] mx-auto 
                        max-md:text-[2.5rem] max-md:w-full max-md:text-[2.8rem]
                    ">
                        <span className="
                        block text-[8rem] text-regal-beige 
                        max-md:text-[4rem]"
                        >ВЕЛИКИЙ</span>
                        ВСЕУКРАЇНСЬКИЙ ЗБІР
                    </div>
                </div>
            </div>
        </>
    );
};