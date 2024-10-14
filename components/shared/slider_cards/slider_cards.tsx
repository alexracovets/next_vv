'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselApi } from '@/components/ui/carousel';
import { Slider_Cards_Item } from '@/components/shared/slider_cards/slider_cards_item';
import { SliderArrow } from '@/components/ui/sliderArrow';

interface Slide {
    name: string;
    price: string;
}

interface Props {
    slides: Slide[];
    brown?: boolean;
}
export const Slider_Cards: React.FC<Props> = ({ slides, brown }) => {
    const [api, setApi] = useState<CarouselApi>();
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
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        })
    }, [api])

    if (!slides) return;
    return (
        <>
            <Carousel setApi={setApi} className='pb-[10rem] mb-[10rem]' opts={{
                align: 'center',
                skipSnaps: true,
                loop: true
            }}>
                <CarouselContent>
                    {
                        slides.map((item, index) => {
                            return (
                                <Slider_Cards_Item
                                    key={index}
                                    index={index}
                                    current={current}
                                    count={count}
                                    name={item.name}
                                    price={item.price}
                                    brown={brown}
                                />
                            )
                        })
                    }
                </CarouselContent>
                <div className='absolute left-0 bottom-0 w-full h-[7rem]'>
                    <div className='relative w-[40rem] mx-auto'>
                        <SliderArrow onClick={scrollPrev} />
                        <SliderArrow onClick={scrollNext} next />
                    </div>
                </div>
            </Carousel>
        </>
    );
};