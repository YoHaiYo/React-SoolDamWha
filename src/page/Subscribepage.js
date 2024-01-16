import React from 'react'
import SwiperSubscribe from './SwiperSubscribe'

function Subscribepage(props) {
  // console.log(props); // 확인용 로그

  return (
    <>
      <div className='text-center m-5'>
        <h2 style={{ marginTop: "300px" }}>인생술을 찾는 여정. 우리 오늘부터 만날까요?</h2>
      </div>
      <SwiperSubscribe datasrc={props.datasrc}></SwiperSubscribe>
    </>
  )
}

export default Subscribepage