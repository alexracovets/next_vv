'use client';

import { Slider_Default } from "@/components/shared/slider_default/slider_default";
import { GiftsBlock } from "@/components/shared/giftsBlock";
import { Container } from "@/components/shared/container";
import { MainTitle } from "@/components/shared/mainTitle";
import { Section } from "@/components/shared/section";
import { Patron } from "@/components/shared/patron";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Section className="my-0">
        <Container className="h-[91.5dvh] flex justify-center items-center">
          <MainTitle />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Наша місія</Title>
          <div className="
            font-spectral text-[4rem] text-center font-[500] max-w-[95rem] mx-auto
            max-md:text-[2.5rem]
          ">
            <span className="text-regal-beige">Відновлення</span> Першого та Єдиного Україномовного Осередку на Святій Горі Афон
          </div>
        </Container>
        <Slider_Default />
        <Button className="mb-[10rem]">зробити внесок</Button>
        <div className="flex justify-between items-center">
          <Button variant={'mono'}>MONO</Button>
          <Button variant={'privat'}>Privat24</Button>
        </div>
      </Section>
      <Section>
        <Container>
          <Title>Стати меценатом</Title>
          <Patron />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>подарунки за ваші внески</Title>
        </Container>
        <GiftsBlock />
      </Section>
    </main>
  );
}