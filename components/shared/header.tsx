'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: "Головна",
            href: "#first"
        },
        {
            name: "Про проєкт",
            href: "#about"
        },
        {
            name: "Стати меценатом",
            href: "#patron"
        },
        {
            name: "Стати волонетром",
            href: "#join"
        },
        {
            name: "Хронологія",
            href: "#time_line"
        },
        {
            name: "Організатори",
            href: "#comitet"
        },
        {
            name: "Наші благодійники",
            href: "#gifts"
        },
        {
            name: "Контакти",
            href: "#contact"
        }
    ];

    return (
        <header>
            <Container>
                {/* Навігація для десктопу */}
                <nav className="max-md:hidden w-full py-[2rem]">
                    <ul className='flex justify-center items-center'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="
                                    text-regal-white text-[1.6rem] font-spectral font-[600] uppercase p-[1rem]
                                    hover:text-green-500
                                "
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Бургер-меню для мобільних пристроїв */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="text-gray-800">
                                {isOpen ? 'Закрити' : 'Меню'}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="p-4">
                            <nav className="space-y-2">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="block text-gray-800 hover:text-green-500"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
};
