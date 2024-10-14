'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Dash: React.FC<React.PropsWithChildren<Props>> = ({ className }) => {
    return (
        <hr className={cn('border-[.4rem] border-regal-beige rounded-[.4rem] w-[23.7rem] mx-auto mb-[2.5rem]', className)} />
    );
};