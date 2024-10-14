'use client';

import { Slider_Default } from "@/components/shared/slider_default/slider_default";
import { GiftsBlock } from "@/components/shared/giftsBlock";
import { Container } from "@/components/shared/container";
import { MainTitle } from "@/components/shared/mainTitle";
import { Section } from "@/components/shared/section";
import { Patron } from "@/components/shared/patron";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { Dash } from "@/components/ui/dash";

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
      <Section>
        <Container>
          <Title className="w-[90rem] mx-auto">Приєднатись до Команди</Title>
          <div className="text-[4rem] text-center font-spectral font-[500] leading-[4.8rem] max-w-[124.6rem] mx-auto mb-[5rem]">
            Вам відгукується наш проєкт і Ваше серце відкрите, щоб допомогти важливій справі?
          </div>
          <Dash className="mb-[5rem]" />
          <div className="text-[3.2rem] text-center font-spectral max-w-[124.6rem] mx-auto mb-[5rem]">
            Приєднуйся до нашої команди волонтерів та зроби всій внесок у відбудову. <br />
            Якщо Ви хочете організувати свій невеликий збір серед друзів або колег, – ми надамо вам підтримку і всі необхідні матеріали
          </div>
          <Button>Приєднатись</Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Хронологія будівництва</Title>

        </Container>
      </Section>
    </main >
  );
}