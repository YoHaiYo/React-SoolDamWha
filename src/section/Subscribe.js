import React from 'react'
import SubscribeCard from '../workroom/SH/SubscribeCard'

function Subscribe() {
  return (
    <>
            <section id="subscribe" class="wrap text-center mb-5">

          <h2><a href="">구독, 아직도 망설이시나요?</a></h2>
            <div class="subscribe-main-wrap d-flex justify-content-around">
            <SubscribeCard nm="증류주 담화박스" img="/assets/img/cheongju/cheongju01.jpg"/>
            <SubscribeCard nm="종합 담화박스" img="/assets/img/cheongju/cheongju02.jpg"/>
            <SubscribeCard nm="청주 담화박스" img="/assets/img/cheongju/cheongju03.jpg"/>
          </div>
          <button class="ssh--btn-apply">지금 신청하기</button>

          </section>
    
    </>
  )
}

export default Subscribe
