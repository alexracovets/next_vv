'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';

export const Slider_Default: React.FC = () => {

    const slides = [
        {
            image: 'slide_01.png',
            alt: 'Паломницький Будинок',
            meta: '<span>Мета: </span>Збудувати Паломницький Будинок на 50 осіб',
            points: [
                "Паломницький Будинок на 50 осіб для реабілітації Ветеранів та Паломників"
            ]
        },
        {
            image: 'slide_02.png',
            alt: '1033-літнЯ Келія',
            meta: '<span>Мета: </span>Відбудувати 1033-літню Келію',
            points: [
                "Келія “Святих Архангелів” </br> Тут вперше звучатиме молитва українською мовою",
                "Включає в себе Трапезну"
            ]
        },
        {
            image: 'slide_03.png',
            alt: 'Печера Героїв',
            meta: '<span>Мета: </span>Збудувати Печеру Героїв',
            points: [
                "Печера Героїв - підземна зала де буде зберігатись книга з іменами загиблих Героїв",
                "Щомісяця тут буде звучати молитва з поіменною згадкою загиблих Воїнів"
            ]
        }
    ]

    return (
        <Carousel className='w-full'>
            <CarouselContent>
                {
                    slides.map((item, index) => {
                        return (
                            <CarouselItem key={index} className='flex justify-center items-centet'>
                                <div className='relative w-[129.2rem] h-[71.5rem]'>
                                    <Image src={`about/${item.image}`} fill alt={item.alt} style={{ objectFit: 'cover' }}/>
                                </div>
                            </CarouselItem>
                        )
                    })
                }

            </CarouselContent>
        </Carousel>
    );
};