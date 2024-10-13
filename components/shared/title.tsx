'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Title: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <h2 className={
            cn('uppercase text-[7rem] text-center text-regal-beige font-[700] font-spectral mb-[5rem] max-md:text-[3.2rem]', className)}
        >{children}</h2>
    );
};