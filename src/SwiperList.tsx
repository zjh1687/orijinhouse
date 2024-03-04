import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { EffectCoverflow, EffectFade } from 'swiper';
import styled from 'styled-components';
import tw from 'twin.macro';

const Dimmed = styled.div`
  ${tw`absolute w-full h-screen top-0 bg-black/60 z-10`}
`;

function SwiperList() {
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  // const [mousedegree, setMousedegree] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperbgEl = useRef<SwiperClass | null>(null);
  const swiperEl = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperbgEl.current) {
      swiperbgEl.current.setProgress(currentTranslate);
    }
  }, [currentTranslate]);

  // useEffect(() => {
  //   if (wrapperRef.current) {
  //     wrapperRef.current.addEventListener('mousemove', (e) => {
  //       console.log(e.clientX, e.clientY);
  //       setMousedegree();
  //     });
  //   }
  // }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex w-full overflow-hidden h-[100dvh] flex-col items-center justify-center"
    >
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        slidesPerGroup={1}
        speed={5000}
        modules={[EffectFade]}
        effect="fade"
        onSwiper={(swiper: SwiperClass) => (swiperbgEl.current = swiper)}
      >
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/11.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/22.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/33.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/44.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="absolute w-full h-full"
        modules={[EffectCoverflow]}
        slidesPerView={1.4}
        effect="coverflow"
        speed={1000}
        slidesPerGroup={1}
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        onSwiper={(swiper: SwiperClass) => (swiperEl.current = swiper)}
        onProgress={(swiper) => setCurrentTranslate(swiper.progress)}
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            <div className="aspect-[0.8/1] h-[50vh] bg-black">
              <img className="w-full h-full" src="/1.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center">
            <div className="aspect-[0.8/1] h-[50vh] bg-black">
              <img className="w-full h-full" src="/2.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center">
            <div className="aspect-[0.8/1] h-[50vh] bg-black">
              <img className="w-full h-full" src="/3.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center">
            <div className="aspect-[0.8/1] h-[50vh] bg-black">
              <img className="w-full h-full" src="/4.png" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperList;
