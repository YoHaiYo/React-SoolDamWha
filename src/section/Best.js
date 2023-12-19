import React from 'react'



import BestSwiper from '../workroom/SH/BestSwiper';

function Best(props) {

  return (
    <>
 <section id="bestTitle" className="text-center mb-5">
      <div className="d-flex align-items-center bg-transparent">

        <div className="slide-box position-relative">
          <h2 className="best-ment">술고래들의<br/>PICK !</h2>
          <button className="ssh--btn-go-now">지금 바로 보러가기
            <i className="bi bi-box-arrow-up-right"></i>
          </button>
          <div className="slide-box-btns d-flex position-absolute">
            <div className="swiper-button-prev">
            </div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <BestSwiper datasrc={props.datasrc}/>
       
      </div>

    </section>
    </>
  )
}

export default Best
