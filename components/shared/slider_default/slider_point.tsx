'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    classNameWrapper?: string;
    classNameInner?: string;
    rotate?: string;
    height?: string;
}

export const SliderPoint: React.FC<React.PropsWithChildren<Props>> = ({ classNameWrapper, classNameInner, rotate, height, children }) => {
    return (
        <article className={cn('absolute w-[56rem] flex justify-center items-center max-md:w-full', classNameWrapper)}>
            <div className='relative max-md:w-full'>
                <p className='text-[3rem] text-center font-roboto py-[1.5rem] px-[2rem] border-[0.2rem] border-regal-white rounded-[2.5rem] bg-regal-bg-point max-md:text-[1.3rem] max-md:w-full max-md:rounded-[1.5rem]'
                    dangerouslySetInnerHTML={{ __html: typeof children === 'string' ? children : '' }}
                />
                <div className={cn('absolute max-md:hidden', classNameInner)}>
                    <div className={cn('flex flex-col justify-center items-center origin-top transform-gpu', rotate)}>
                        <div className={cn('w-[0.2rem] bg-regal-white', height)} />
                        <div className='w-[2rem] h-[2rem] bg-regal-white rounded-[50%]' />
                    </div>
                </div>
            </div>
        </article>
    );
};