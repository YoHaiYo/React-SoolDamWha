import React from 'react'


function SubscribeCard(props) {
  return (
    <>

    {
      props.datasrc.map((el, idx)=> {
        return (
          <div className="subscribe-wrap" key={`div${idx}`}>
          <a href="">
            {/* <img className='rounded-circle' src="/assets/img/cheongju/cheongju01.jpg" alt="cheongju01" /> */}
            <img className='rounded-circle' src={el.imgsrc} alt="" />
            <div className="box-name">{el.nm}</div>
          </a>
        </div>
        )
      })
      
    } 

        
    </>
  )
}

export default SubscribeCard
