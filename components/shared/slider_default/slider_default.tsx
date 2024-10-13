'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { SliderPoint } from '@/components/shared/slider_default/slider_point';
import { SliderArrow } from '@/components/ui/sliderArrow';

export const Slider_Default: React.FC = () => {
    const [dimensions, setDimensions] = useState({ width: 1292, height: 715 });
    const [api, setApi] = useState<CarouselApi>();
    const [apiText, setApiText] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const scrollPrev = useCallback(() => {
        if (api) api.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
        if (api) api.scrollNext()
    }, [api])

    useEffect(() => {
        if (!api) {
            return
        };
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        })
    }, [api])

    useEffect(() => {
        if (!apiText) {
            return
        }
        apiText.scrollTo(current - 1);
    }, [api, apiText, current])

    useEffect(() => {
        const updateDimensions = () => {
            const baseWidth = window.innerWidth >= 1920 ? 1920 : 430;
            const rem = (window.innerWidth / baseWidth) * 10;
            setDimensions({
                width: 129.2 * rem,
                height: 71.5 * rem,
            });
        };

        window.addEventListener('resize', updateDimensions);
        updateDimensions();

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const slides = [
        {
            image: 'slide_01.png',
            alt: 'Паломницький Будинок',
            meta: 'Збудувати Паломницький Будинок на 50 осіб',
            points: [
                {
                    text: "Паломницький Будинок на 50 осіб для реабілітації Ветеранів та Паломників",
                    classNameWrapper: 'left-0 top-[20%] max-md:top-0',
                    classNameInner: 'left-[50%] bottom-0 translate-x-[-50%] translate-y-[100%]',
                    rotate: 'rotate-[300deg]',
                    height: 'h-[25rem]'
                }
            ]
        },
        {
            image: 'slide_02.png',
            alt: '1033-літнЯ Келія',
            meta: 'Відбудувати 1033-літню Келію',
            points: [
                {
                    text: "Келія “Святих Архангелів” </br> Тут вперше звучатиме молитва українською мовою",
                    classNameWrapper: 'left-[-10rem] top-[12%] max-md:top-0 max-md:left-0',
                    classNameInner: 'left-[95%] bottom-0 translate-x-[-50%] translate-y-[100%]',
                    rotate: 'rotate-[310deg]',
                    height: 'h-[25rem]'
                },
                {
                    text: "Включає в себе Трапезну",
                    classNameWrapper: 'right-[-5rem] top-[-2rem] w-[43rem] max-md:right-auto max-md:top-auto max-md:left-0 max-md:bottom-0',
                    classNameInner: 'left-[50%] bottom-0 translate-x-[-50%] translate-y-[100%]',
                    rotate: 'rotate-[10deg]',
                    height: 'h-[25rem]'
                }
            ]
        },
        {
            image: 'slide_03.png',
            alt: 'Печера Героїв',
            meta: 'Збудувати Печеру Героїв',
            points: [
                {
                    text: "Щомісяця тут буде звучати молитва з поіменною згадкою загиблих Воїнів",
                    classNameWrapper: 'bottom-[1rem] left-[1rem] w-[43rem] max-md:bottom-auto max-md:left-0 max-md:top-0',
                    classNameInner: 'left-[50%] top-0 translate-x-[-50%] translate-y-[0%]',
                    rotate: 'rotate-[240deg]',
                    height: 'h-[17rem]'
                },
                {
                    text: "Печера Героїв - підземна зала де буде зберігатись книга з іменами загиблих Героїв",
                    classNameWrapper: 'top-[23rem] right-[1rem] w-[43rem] max-md:top-auto max-md:right-auto max-md:left-0 max-md:bottom-0',
                    classNameInner: 'left-[0%] top-[50%] translate-x-[-50%] translate-y-0',
                    rotate: 'rotate-[130deg]',
                    height: 'h-[15rem]'
                }
            ]
        }
    ]
    return (
        <>

            <Carousel className='relative w-full pointer-events-none mb-[3rem] max-md:mb-[1rem]' setApi={setApiText} plugins={[Fade()]}>
                <CarouselContent>
                    {
                        slides.map((item, index) => {
                            return (
                                <CarouselItem key={index} className='flex justify-center items-centet pt-[5rem]'>
                                    <div className="
                                        font-spectral text-[3.5rem] text-center font-[500] max-w-[95rem] mx-auto
                                        max-md:text-[2.5rem] 
                                    ">
                                        <span className="text-regal-beige">Мета:</span> {item.meta}
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
            <Carousel className='relative w-full mb-[6rem] max-md:pb-[10rem]' id="about" setApi={setApi} opts={{ dragFree: false }}>
                <CarouselContent>
                    {
                        slides.map((item, index) => {
                            return (
                                <CarouselItem key={index} className='flex justify-center items-centet pt-[5rem] cursor-pointer'>
                                    <div className='relative flex justify-center items-center w-[129.2rem] max-md:w-[39rem] max-md:py-[1rem] '>
                                        <Image src={`about/${item.image}`} width={dimensions.width} height={dimensions.height} alt={item.alt}
                                            style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }} className='rounded-[1rem]'
                                        />
                                        {
                                            item.points.map((item, index) => {
                                                return (
                                                    <SliderPoint key={index} classNameWrapper={item.classNameWrapper} classNameInner={item.classNameInner} rotate={item.rotate} height={item.height}>
                                                        {item.text}
                                                    </SliderPoint>
                                                )
                                            })
                                        }
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <SliderArrow onClick={scrollPrev} disabled={current === 1} />
                <SliderArrow onClick={scrollNext} disabled={current === count} next />
            </Carousel>
        </>
    );
};