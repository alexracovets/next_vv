'use client';

import React from 'react';
import { Slider_Cards } from '@/components/shared/slider_cards/slider_cards';
import { Dash } from '@/components/ui/dash';

export const GiftsBlock: React.FC = () => {

    const huge = [
        {
            name: "покровительство над Келією чи паломницьким будинком",
            price: "€500.000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ХРАНИТЕЛЬ»",
            price: "€50000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ВІДБУДОВНИК»",
            price: "€10000",
            number: 2
        },
        {
            name: "цеглина серії «БЕРЕЖИЧ»",
            price: "€5000",
            number: 2
        },
        {
            name: "іменне дерево в «Родовому саду» на Афоні",
            price: "€5000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ЖИВИТЕЛЬ»",
            price: "€25000",
            number: 2
        }
    ]
    const available = [
        {
            name: "покровительство над Келією чи паломницьким будинком",
            price: "€500.000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ХРАНИТЕЛЬ»",
            price: "€50000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ВІДБУДОВНИК»",
            price: "€10000",
            number: 2
        },
        {
            name: "цеглина серії «БЕРЕЖИЧ»",
            price: "€5000",
            number: 2
        },
        {
            name: "іменне дерево в «Родовому саду» на Афоні",
            price: "€5000",
            number: 2
        },
        {
            name: "2 іменні (або корпоративні) цеглини серії «ЖИВИТЕЛЬ»",
            price: "€25000",
            number: 2
        }
    ]

    return (
        <>
            <Dash />
            <h3 className='uppercase text-[4rem] text-center font-spectral font-[600] mb-[10rem]'>Вагомі внески</h3>
            <Slider_Cards slides={huge} />
            <Dash />
            <h3 className='uppercase text-[4rem] text-center font-spectral font-[600] mb-[10rem]'>Доступні внески</h3>
            <Slider_Cards slides={available} brown />
        </>
    );
};
