'use client';

import { Container } from "@/components/shared/container";
import { MainTitle } from "@/components/shared/mainTitle";
import { Section } from "@/components/shared/section";
import { Slider_Default } from "@/components/shared/slider_default";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <main>
      <Section className="py-0">
        <Container className="h-[91.5dvh] flex justify-center items-center">
          <MainTitle />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>
            Наша місія
          </Title>
          <div className="font-spectral text-[4rem] text-center font-[500] max-w-[95rem] mx-auto mb-[2rem]">
            <span className="text-regal-beige">Відновлення</span> Першого та Єдиного Україномовного Осередку на Святій Горі Афон
          </div>
          <div className="font-spectral text-[3.5rem] text-center font-[500] max-w-[95rem] mx-auto">
            <span className="text-regal-beige">Мета:</span> Збудувати Паломницький Будинок на 50 осіб
          </div>
        </Container>
        <Slider_Default />
      </Section>
    </main>
  );
}