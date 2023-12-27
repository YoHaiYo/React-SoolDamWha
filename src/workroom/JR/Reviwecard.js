import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ReviewCard() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={8}
        slidesPerView={7}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
            return (
              <SwiperSlide>
                <div>
                  <img src="/assets/img/takju/takju1.jpg" alt="" className="ptrv" />
                  <p className='color-black'>good~</p>
                  <div id="face" className="d-flex justify-content-center">
                    <a className='face'><img src='/assets/img/face/face1-01.svg' alt="" />re15님</a>
                    <div className="rv-star">
                      <div className="starNum d-flex text-center w-100">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )

          })

        }
      </Swiper>
    </>
  );
}