import React, { useRef, useState, Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Subscribepage(props) {
  return (
    <div className='subscribepage_swiper container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="SubscribepageSwiper"
      >
        {
          props.datasrc.map((el, i) => {
            return (
              <React.Fragment key={i}>
                <SwiperSlide>
                  <div style={{ background: `url(./assets/img/subscribepage/${el.imgsrc}) no-repeat center` }} className='swiper_img'>
                    <div className='dsec_box'>
                      <p className='text-center'>
                        {el.text.split('|').map((v, ii) => (
                          <Fragment key={ii}>
                            {v}
                            <br />
                          </Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </React.Fragment>
            )
          })
        }

      </Swiper >
    </div>
  );
}