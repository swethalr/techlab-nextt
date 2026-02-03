'use client';

import { Container } from '@/src/components/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Add this if your carousel uses dots

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { useDomReady } from '@/src/hooks/dom-ready';
import { WorkprocessCard } from '../card';
import { WorkprocessSectionProps } from '..';

export function WorkCardsCaraousl({
  cards,
}: Pick<WorkprocessSectionProps, 'cards'>) {
  const isDomReady = useDomReady();

  return (
    <>
      {isDomReady && (
        <Container>
          {cards && cards.length > 0 && (
            <div className="mt-[60px]">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                className="!overflow-visible"
                speed={400}
                loop
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  0: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  375: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  575: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                  },
                  992: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                  },
                  1200: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                  },
                }}
              >
                {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                    <WorkprocessCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </Container>
      )}
    </>
  );
}
