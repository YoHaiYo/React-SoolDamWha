import React from 'react'
import Hd from '../workroom/SE/Hd'
import MainSwiper from '../workroom/SE/MainSwiper'

function Header(props) {
  console.log(props)
  return (
    <>
      <Hd datasrc={props.datasrc}></Hd>
      <MainSwiper datasrc={props.datasrc.mainbanner}></MainSwiper>
    </>
  )
}

export default Header