import React from 'react'
import ReviewCard from '../workroom/JR/Reviwecard'

function Review() {
  return (
    <>
      <Swiper
        modules={[Autoplay,]}
        Autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        spaceBetween={8}
        slidesPerView={7}

      >

        <SwiperSlide><ReviewCard /></SwiperSlide>
        {/* <SwiperSlide style={{ background: "gray", height: "500px" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "blue", height: "500px" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "yellow", height: "500px" }}>Slide 4</SwiperSlide> */}

      </Swiper>

    </>
  )
}

export default Review
