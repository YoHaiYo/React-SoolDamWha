import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sdhdata from '../../data/sdhdata.json'


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
        loop={true}
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
          sdhdata.ko.review.map((e, i) => {
            return (
              <SwiperSlide>
                <div>
                  <img src={e['img src']} alt="" className="ptrv" />
                  <p className='color-black'>{e.coment}</p>
                  <div id="face">
                    <a className='face'><img src={e['faceimg']} alt="" />re15님</a>
                    <div className="rv-star">
                      <div className="starNum">

                        {Array.from({ length: e.rvstar }, (_, index) => (
                          <span key={index}></span>
                        ))}
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