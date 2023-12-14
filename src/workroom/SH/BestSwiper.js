import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function BestSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        loop={false}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
    
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="BestSwiper"
      >
        <SwiperSlide>
          <a href="">
            <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
          </a>
          <div class="pickbox">
            <div class="picktitle">구름을 벗삼아</div>
            <div class="hashtag">#부드러운 #고급막걸리</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
          </a>
          <div class="pickbox">
            <div class="picktitle">구름을 벗삼아</div>
            <div class="hashtag">#부드러운 #고급막걸리</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
          </a>
          <div class="pickbox">
            <div class="picktitle">구름을 벗삼아</div>
            <div class="hashtag">#부드러운 #고급막걸리</div>
          </div>
        </SwiperSlide>
      </Swiper>  
    </>
  )
}

export default BestSwiper
