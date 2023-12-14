import React from 'react'
import SubscribeCard from '../workroom/SH/SubscribeCard'
import SectionTitle from '../workroom/SH/SectionTitle'
import Btn from '../workroom/SH/Btn'

function Subscribe() {
  return (
    <>
        <section id="subscribe" class="wrap text-center mb-5">

          <SectionTitle title="구독, 아직도 망설이시나요?"/>

          <div class="subscribe-main-wrap d-flex justify-content-around">
            <SubscribeCard nm="증류주 담화박스" img="/assets/img/cheongju/cheongju01.jpg"/>
            <SubscribeCard nm="종합 담화박스" img="/assets/img/cheongju/cheongju02.jpg"/>
            <SubscribeCard nm="청주 담화박스" img="/assets/img/cheongju/cheongju03.jpg"/>
          </div>

          <Btn text="지금 신청하기"/>  
                  
        </section>
    
    </>
  )
}

export default Subscribe
