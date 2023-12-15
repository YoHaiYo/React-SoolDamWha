import React from 'react'



import BestSwiper from '../workroom/SH/BestSwiper';

function Best(props) {

  return (
    <>
 <section id="bestTitle" class="text-center mb-5">
      <div class="d-flex align-items-center bg-transparent">

        <div class="slide-box position-relative">
          <h2 class="best-ment">술고래들의<br/>PICK !</h2>
          <button class="ssh--btn-go-now">지금 바로 보러가기
            <i class="bi bi-box-arrow-up-right"></i>
          </button>
          <div class="slide-box-btns d-flex position-absolute">
            <div class="swiper-button-prev">
            </div>
            <div class="swiper-button-next"></div>
          </div>
        </div>

        <BestSwiper datasrc={props.datasrc}/>
       
      </div>

    </section>
    </>
  )
}

export default Best
