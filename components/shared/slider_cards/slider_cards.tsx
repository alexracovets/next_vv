'use client';

import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselApi } from '@/components/ui/carousel';
import { Slider_Cards_Item } from '@/components/shared/slider_cards/slider_cards_item';

interface Slide {
    name: string;
    price: string;
}

interface Props {
    slides: Slide[];
}
export const Slider_Cards: React.FC<Props> = ({ slides }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

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
            <Carousel setApi={setApi} opts={{
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
                                />
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </>
    );
};