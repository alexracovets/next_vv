'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const MainTitle: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <section className={cn('my-[20rem]', className)}>{children}</section>
    );
};