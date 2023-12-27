import React from 'react'



import BestSwiper from '../workroom/SH/BestSwiper';

function Best(props) {

  return (
    <>
 <section id="bestTitle" className="text-center mb-5">
      <div className="d-flex align-items-center bg-transparent">

        <div className="slide-box">
          <h2 className="best-ment">
            {props.datasrc.etc.title1}<br/>
            {props.datasrc.etc.title2}
          </h2>
          <button className="ssh--btn-go-now">
          {props.datasrc.etc.btn}
            <i className="bi bi-box-arrow-up-right"></i>
          </button>
        </div>

        <BestSwiper datasrc={props.datasrc.item}/>
       
      </div>

    </section>
    </>
  )
}

export default Best
