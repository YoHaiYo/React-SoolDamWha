import React from 'react'
import SubscribeCard from '../workroom/SH/SubscribeCard'
import SectionTitle from '../workroom/SH/SectionTitle'
import Btn from '../workroom/SH/Btn'

function Subscribe(props) {
  return (
    <>
        <section id="subscribe" className="wrap text-center mb-5">

          <SectionTitle title="구독, 아직도 망설이시나요?"/>

          <div className="subscribe-main-wrap d-flex justify-content-around">
            <SubscribeCard datasrc={props.datasrc} />
          </div>

          <Btn text="지금 신청하기"/>  
                  
        </section>
    
    </>
  )
}

export default Subscribe
