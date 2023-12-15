import React from 'react'

function ReviewCard() {
  return (
    <>
      <div className="swiper-slide">
        <div>
          <img src="/assets/img/gwashilju/gwashilju01.jpg" alt="" id="ptrv" />
          <p>어울리는 안주 만들어 남편과 같이 마셔봐야겠어요.</p>
          <div id="face" className="d-flex justify-content-center">
            <a id="face-t" href='#none'><img src="/assets/img/gwashilju/gwashilju01.jpg" alt="" /> re15님,</a>
            <a href='#none'>
              <div className="rv-star ">
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
      </div>
    </>
  
  )
}

export default ReviewCard
