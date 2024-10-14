'use client';

import React from 'react';

import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Patron: React.FC = () => {

    const list = [
        {
            classNameWrapper: 'pt-[25.7rem]',
            title: <><span className='font-[800] text-regal-beige'>Твоє прізвище</span> на цеглині закладеної в будову Келії</>,
            content: [
                {
                    type: 'text',
                    value: 'Ми вирішили, що Ваші щедрі внески мають бути по-особливому відзначені та увічнені в історії. Тому виготовимо дві «персональні» цеглини з Вашим прізвищем. Одну буде закладено у стіни відбудованої Келії, а другу отримаєте як сувенір, що нагадуватиме про Ваш зв’язок з Афоном. Її зможете розмістити у себе на робочому столі в кабінеті, в офісі або вдома.'
                }
            ],
            background: [
                {
                    type: 'image',
                    image: 'patron/1/1.png',
                    classNameItem: 'left-0 top-0 w-[43.2rem] h-[34.7rem]'
                },
                {
                    type: 'image',
                    image: 'patron/1/2.png',
                    classNameItem: 'left-0 bottom-0 w-[31.4rem] h-[24.9rem]'
                },
                {
                    type: 'image',
                    image: 'patron/1/3.png',
                    classNameItem: 'left-[50%] top-[7.6rem] w-[54rem] h-[21.8rem] translate-x-[-50%]'
                },
                {
                    type: 'image',
                    image: 'patron/1/4.png',
                    classNameItem: 'right-0 top-[50%] w-[19.6rem] h-[23.9rem] translate-y-[-50%]'
                }
            ]
        },
        {
            classNameWrapper: 'pt-[23.7rem]',
            title: <>Створи <span className='font-[800] text-regal-beige'>вічнозелений сад</span> від імені <span className='font-[800] text-regal-beige'>свого Роду</span></>,
            content: [
                {
                    type: 'text',
                    value: 'Подяка «Святе дерево роду». За внесок 5 тисяч євро і більше Ви маєте унікальну можливість створити вічнозелений сад від імені свого Роду. У ньому ростимуть лавр або олива на честь ваших батька, матері, дружини, дітей або інших родичів. Ми можемо посадити таке дерево від Вашого імені, встановивши біля нього спеціальну родову табличку із зазначенням Вашого прізвища-імені, а також членів Вашої родини.'
                }
            ],
            background: [
                {
                    type: 'image',
                    image: 'patron/2/1.png',
                    classNameItem: 'left-0 bottom-0 w-[25.5rem] h-[27.2rem]'
                },
                {
                    type: 'image',
                    image: 'patron/2/2.png',
                    classNameItem: 'right-0 bottom-0 w-[24.6rem] h-[27.2rem]'
                },
                {
                    type: 'image',
                    image: 'patron/2/3.png',
                    classNameItem: 'left-[50%] top-[7.6rem] w-[58.1rem] h-[6.6rem] translate-x-[-50%]'
                }
            ]
        },
        {
            classNameWrapper: 'pt-[22rem]',
            title: <>Стань <span className='font-[800] text-regal-beige'>патронатом-відбудовником</span> цієї споруди</>,
            content: [
                {
                    type: 'text',
                    value: 'На ваше бажання та відповідно до можливостей, можна обрати повний патронат над відбудовою однієї з будівель монастирського комплексу:'
                },
                {
                    type: 'patrons',
                    patrons: [
                        {
                            name: 'Патронат «хранитель»',
                            price: '€1.500.000'
                        },
                        {
                            name: 'Патронат «відбудовник»',
                            price: '€800.000'
                        },
                        {
                            name: 'Патронат «живитель»',
                            price: '€500.000'
                        },
                        {
                            name: 'Патронат «Бережич»',
                            price: '€100.000'
                        }
                    ]
                },
                {
                    type: 'text',
                    value: 'Патронатну іменну табличку буде встановлено біля основного входу до Келійної будівлі із написом: «ПIБ – Патронат-відбудовник цієї споруди (келії, паломницького будинку чи трапезної)».'
                }
            ],
            background: [
                {
                    type: 'image',
                    image: 'patron/3/1.png',
                    classNameItem: 'left-[50%] top-[3.4rem] w-[41.5rem] h-[41.9rem] translate-x-[-50%]'
                },
                {
                    type: 'mask',
                    value: <div style={{ background: 'linear-gradient(0deg, transparent 25%, #333333 43%)' }}></div>
                }
            ]
        },
        {
            classNameWrapper: 'pt-[25.7rem]',
            title: <>Отримай <span className='font-[800] text-regal-beige'>“Ключ відбудовника Афону”</span></>,
            content: [
                {
                    type: 'text',
                    value: `
                        Для благодійників з пожертвами від 500 євро і більше ми виготовили лімітовану серію пам’ятного подарунка “The Athos key”. 
                        </br>
                        Символічно, що таких подарункових комплектів буде випущено 991– як пам’ять про рік першої згадки про українську Обитель на Святій Горі Афон.
                    `
                },
                {
                    type: 'text',
                    value: 'Кожен ключ має свій унікальний номер, який засвідчує номерна картка до нього. Вся серія ключів у побувала на Святій Горі Афон, після чого була запакована у своєрідні подарункові подяки вам, за розуміння цієї високої місії та ваш суттєвий внесок у відбудову!'
                }
            ],
            background: [
                {
                    type: 'image',
                    image: 'patron/4/1.png',
                    classNameItem: 'right-[50%] top-[4.2rem] w-[14.7rem] h-[19.3rem] translate-x-[-10%]'
                },
                {
                    type: 'image',
                    image: 'patron/4/2.png',
                    classNameItem: 'left-[50%] top-[4.2rem] w-[14.7rem] h-[19.3rem] translate-x-[10%]'
                }
            ]
        }
    ]

    return (
        <div className='flex justify-between flex-wrap'>
            {list.map((item, index) => {
                return (
                    <div key={index}
                        className={
                            cn(
                                'relative w-[86rem] h-[68.7rem] bg-[#333] border-[0.1rem] border-regal-white rounded-[3.5rem] px-[12.4rem] my-[1.5rem] overflow-hidden',
                                item.classNameWrapper
                            )}>
                        <div className='relative z-[1] w-full'>
                            <h5 className='text-[3.2rem] text-center font-playfair font-[500] mb-[3rem] tracking-[-0.1rem]'>
                                {item.title}
                            </h5>
                            <div className='w-full mb-[5rem]'>
                                {item.content.map((content, index) => {
                                    switch (content.type) {
                                        case 'text':
                                            return (
                                                <p key={index}
                                                    className='text-[1.6rem] tracking-[-0.04rem] font-roboto text-center leading-[1.962rem] mb-[2.4rem]'
                                                    dangerouslySetInnerHTML={{ __html: typeof content.value === 'string' ? content.value : '' }}
                                                />
                                            )
                                        case 'patrons':
                                            return (
                                                <div key={index} className='flex justify-between mb-[2.4rem]'>
                                                    {
                                                        content.patrons?.map((patron, idx) => {
                                                            return (
                                                                <div key={idx} className='flex flex-col justify-center items-center w-[13.1rem] py-[1.9rem] rounded-[1.3rem] font-roboto font-[700] tracking-[-0.03rem]'
                                                                    style={{ background: 'linear-gradient(137.3deg,#B9BCC1 10.32%,#D1D2D6 31.23%,#EEF0EF 50.12%,#DDE1E2 67.34%,#AEB6B8 86.35%)' }}>
                                                                    <h6 className='uppercase text-regal-black text-center text-[1.3rem] mb-[0.3rem]'>
                                                                        {patron.name}
                                                                    </h6>
                                                                    <p className='text-regal-green text-center text-[1.5rem]'>
                                                                        {patron.price}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            );
                                        default:
                                            return;
                                    }
                                })}
                            </div>
                            <Button variant='patron'>зробити внесок</Button>
                        </div>
                        {
                            item.background.map((item, index) => {

                                switch (item.type) {
                                    case 'image':
                                        return (
                                            <div key={index} className={cn('absolute', item.classNameItem)}>
                                                {item.image && <Image src={item.image} fill alt='bg' />}
                                            </div>
                                        );
                                    case 'mask':
                                        return (
                                            <div key={index} className='absolute left-0 top-0 w-full h-full' style={{ background: 'linear-gradient(transparent 25%,#333333 43%)' }}></div>
                                        );
                                    default:
                                        return;
                                }
                            })
                        }
                    </div>
                )
            })}
        </div>
    );
};