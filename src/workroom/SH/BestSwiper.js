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

import datasrc from '../../data/ssh.json'

function BestSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,

        }}
    
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="BestSwiper"
      >
            {
      datasrc.bestswiper.map((el, idx)=> {
        return (
          <SwiperSlide key={`SwiperSlide${idx}`} >
          <a href="">
            <img src={el.imgsrc} alt="" />
          </a>
          <div class="pickbox">
            <div class="picktitle">{el.picktitle}</div>
            <div class="hashtag">{el.hashtag}</div>
          </div>
        </SwiperSlide>     
          )
      })
      
    } 
 
      </Swiper>  
    </>
  )
}

export default BestSwiper
