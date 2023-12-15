import React from 'react'


function SubscribeCard(props) {
  return (
    <>

    {
      props.datasrc.map((el, idx)=> {
        return (
          <div class="subscribe-wrap" key={`div${idx}`}>
          <a href="">
            {/* <img class='rounded-circle' src="/assets/img/cheongju/cheongju01.jpg" alt="cheongju01" /> */}
            <img class='rounded-circle' src={el.imgsrc} alt="" />
            <div class="box-name">{el.nm}</div>
          </a>
        </div>
        )
      })
      
    } 

        
    </>
  )
}

export default SubscribeCard
