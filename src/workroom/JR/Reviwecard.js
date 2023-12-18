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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {/* <img src="/assets/img/takju/takju1.jpg" alt="" className="ptrv"/> */}
              <p className='color-black'>어울리는 안주 만들어 남편과 같이 마셔봐야겠어요.</p>
              <div id="face" class="d-flex justify-content-center">
              <a className="face"><img src='/assets/img/face/face1-01.svg' alt=""/>re15님</a>
                <a>
                  <div className="rv-star">
                    <div className="starNum d-flex text-center w-100">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </a>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}