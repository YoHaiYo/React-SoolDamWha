import React, { useState } from 'react'
import SwiperSubscribe from './SwiperSubscribe'
import Curation from './Curation'
import FormPopup from './FormPopup'



function Subscribepage(props) {
  // console.log(props); // 확인용 로그
  const [gudockClick, setGudockClick] = useState(false);
  const [selectBox, setSelectBox] = useState(null);


  return (
    <>
      <div className='text-center m-5'>
        <h2 style={{ marginTop: "300px" }}>인생술을 찾는 여정. 우리 오늘부터 만날까요?</h2>
        <h3>[임시] {selectBox}</h3>
      </div>
      <SwiperSubscribe datasrc={props.datasrc}></SwiperSubscribe>
      <Curation gudock={gudockClick} setGudock={setGudockClick} onDataChange={setSelectBox} bringData={selectBox}></Curation>
      <FormPopup gudock={gudockClick} setGudock={setGudockClick} bringData={selectBox}></FormPopup>
    </>
  )
}

export default Subscribepage