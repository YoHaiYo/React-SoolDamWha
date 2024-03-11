import React, { Fragment } from 'react'


function Event(props) {
  return (
    <section style={{ marginTop: "400px" }} className='container eventpage'>

      {
        props.datasrc.map((el, idx) => {
          return (
            <a href="#none" key={idx}>
              <div style={{ background: `url(./assets/img/swiper_img/${el.background}) no-repeat center`, height: "240px", backgroundSize: "100% 100%" }} key={idx} className='eventbanner'>
                <div className='eventtext'>
                  <strong>
                    {el.strong.split("|").map((e, i) => {
                      return <React.Fragment key={i}>
                        {e}
                        <br />
                      </React.Fragment>
                    })}
                  </strong>
                  {
                    el.Mtext.split("|").map((e, i) => {
                      return <React.Fragment key={i}>
                        {e}
                        <br />
                      </React.Fragment>
                    })
                  }
                </div>
              </div>
            </a>
          )
        })
      }
      <div>

      </div>
    </section>
  )
}

export default Event