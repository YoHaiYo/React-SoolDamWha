import React from 'react'


function SubscribeCard(props) {
  return (
    <>


        <div class="subscribe-wrap">
          <a href="">
            {/* <img class='rounded-circle' src="/assets/img/cheongju/cheongju01.jpg" alt="cheongju01" /> */}
            <img class='rounded-circle' src={props.img} alt="" />
            <div class="box-name">{props.nm}</div>
          </a>
        </div>
        
    </>
  )
}

export default SubscribeCard
