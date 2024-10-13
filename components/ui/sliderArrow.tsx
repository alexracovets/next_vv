'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface SliderArrowProps {
    onClick: () => void;
    next?: boolean;
    disabled?: boolean;
}

export const SliderArrow: React.FC<SliderArrowProps> = ({ onClick, next, disabled }) => {

    return (
        <button onClick={onClick} className={
            cn(
                'absolute w-[7rem] h-[7rem] transition-all duration-300 ease-in-out max-md:top-auto max-md:bottom-0',
                next ?
                    'right-[16rem] top-[50%] rotate-0 max-md:right-[50%] translate-x-[110%]' :
                    'left-[16rem] top-[50%] rotate-[180deg] max-md:left-[50%] translate-x-[-110%]',
                disabled ? 'opacity-[0.5] scale-[0.9]' : 'opacity-[1]'
            )}>
            <Image src={'sliderUI/arrow.svg'} alt={'arrow'} fill />
        </button>
    );
};