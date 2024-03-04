import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { EffectCoverflow, EffectFade } from 'swiper';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useIsDevice } from './hooks/device';
import { Link } from 'react-router-dom';

const Dimmed = styled.div`
  ${tw`absolute w-full h-screen top-0 bg-black/60 z-10`}
`;

const ImgWrapper = styled.div`
  ${tw`aspect-square h-[50vh] mobile-lg:h-[30vh]`}
`;

const ImgSlideWrapper = styled.div`
  ${tw`w-full h-screen flex items-center justify-center`}
`;

function SwiperList() {
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  // const [mousedegree, setMousedegree] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperbgEl = useRef<SwiperClass | null>(null);
  const swiperEl = useRef<SwiperClass | null>(null);

  const { isMobileLg } = useIsDevice();

  const imgSlidesPerView = isMobileLg ? 1.1 : 1.4;

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
        slidesPerView={imgSlidesPerView}
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
          <ImgSlideWrapper>
            <ImgWrapper>
              <Link to={'/itemlist'}>
                <img className="w-full h-full" src="/1.webp" />
              </Link>
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/2.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/3.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/4.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperList;
