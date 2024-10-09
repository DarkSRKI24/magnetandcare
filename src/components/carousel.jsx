import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  const swiperRef = useRef(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  useEffect(() => {
    const toggleButton = document.getElementById('autoplay-toggle');
    if (toggleButton) {
      toggleButton.innerText = isAutoplayActive ? 'Stop Autoplay' : 'Start Autoplay';
      toggleButton.addEventListener('click', toggleAutoplay);
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', toggleAutoplay);
      }
    };
  }, [isAutoplayActive]);

  const toggleAutoplay = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper && swiper.autoplay.running) {
      swiper.autoplay.stop();
      setIsAutoplayActive(false);
    } else if (swiper) {
      swiper.autoplay.start();
      setIsAutoplayActive(true);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      style={{
        '--swiper-navigation-color': '#071111',
        '--swiper-pagination-color': '#f5fbfc',
      }}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="carouselSwiper w-full h-[360px] sm:h-[720px]"
    >
      <SwiperSlide>
        <img src="/slide 1.jpg" alt="slika 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slide 2.jpg" alt="slika 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slide 3.jpg" alt="slika 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
