import React from 'react'



import BestSwiper from '../workroom/SH/BestSwiper';

function Best() {

  return (
    <>
       <section id="bestTitle" class="text-center mb-5">

       <BestSwiper/>

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


        {/* <div class="swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">

              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
              </a>
              <div class="pickbox">
                <div class="picktitle">구름을 벗삼아</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
              
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
              </a>
              <div class="pickbox">
                <div class="picktitle">나루 생막걸리</div>
                <div class="hashtag">#부드러운 #생막걸리</div>
              </div>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
              </a>
              <div class="pickbox">
                <div class="picktitle">담은 블랙</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
              </a>
              <div class="pickbox">
                <div class="picktitle">담은</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt="" />
              </a>
              <div class="pickbox">
                <div class="picktitle">대대포 블루</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt=""/>
              </a>
              <div class="pickbox">
                <div class="picktitle">막쿠</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="/assets/img/cheongju/cheongju01.jpg" alt=""/>
              </a>
              <div class="pickbox">
                <div class="picktitle">보라 막걸리</div>
                <div class="hashtag">#부드러운 #고급막걸리</div>
              </div>
            </div>
          </div>
        </div> */}


      </div>

    </section>
    </>
  )
}

export default Best
