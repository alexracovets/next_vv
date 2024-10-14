'use client';

import React, { useEffect, useState } from 'react';
import { CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Props {
    index: number;
    current: number;
    count: number;
    name: string;
    price: string;
}

export const Slider_Cards_Item: React.FC<Props> = ({ index, current, count, name, price }) => {
    const wrapperBaseStyle = "card_item_0 transition-all duration-300 ease-in-out scale-x-[0.9] scale-y-[0.85] transform-gpu pattern overflow-hidden relative flex flex-col justify-center items-center uppercase text-[2.556rem] font-spectral text-regal-black h-[40.5rem] rounded-[2.5rem] before:bg-[url('/pattern/pattern_white.svg')] after:bg-[url('/pattern/pattern_white.svg')]"
    const [isActive, setIsActive] = useState(false);
    const [isSecond, setIsSecond] = useState(false);

    useEffect(() => {
        setIsActive(current === index);

        const isPrevious = current === 0 ? index === count - 1 : index === current - 1;
        const isNext = (current === count - 1 && index === 0) || index === current + 1;

        setIsSecond(isPrevious || isNext);
    }, [current, index, count]);

    return (
        <CarouselItem className='basis-1/5 p-0'>
            <div
                className={cn(wrapperBaseStyle, isActive ? 'scale-x-[1] scale-y-[1] active' : '', isSecond ? 'scale-x-[0.90] scale-y-[0.90]' : '')} 
            >
                <h6 className='tracking-[-0.1rem] text-center font-[700]'>
                    {name}
                </h6>
                <p className='font-[600] align-baseline'>за <span className='text-regal-green text-[3.196rem] font-[700]'>{price}</span></p>
            </div>
        </CarouselItem>
    );
};