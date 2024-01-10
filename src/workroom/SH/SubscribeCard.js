import React from 'react'
import subscribecard from './subscribecard.module.scss';
import { useState } from 'react';


function SubscribeCard(props) {
  const [tabnum, setTabnum] = useState(0);
  const [styleAct, setStyleAct] = useState('off');
  const tabArr = ["종합", "증류주", "청주"]

  const clsmaker = () => {

  }

  return (
    <>

      {
        props.datasrc.map((el, idx) => {
          return (
            <div className="subscribe-wrap subscribe-pc-view" key={`div${idx}`}>
              <a href="" className={subscribecard.ssh}>
                {/* <img className='rounded-circle' src="/assets/img/cheongju/cheongju01.jpg" alt="cheongju01" /> */}
                <img className='rounded-circle' src={el.imgsrc} alt="" />
                <p className="box-name">{el.nm}</p>
              </a>
            </div>
          )
        })

      }

      {/* 모바일용 */}
      <section className='subscribe-mobile-view'>
        <div className='tabbtns'>
          {tabArr.map((el, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTabnum(idx);
              }}
              className={idx === tabnum ? 'on' : 'off'}
            >
              {el}
            </button>
          ))}
        </div>
        {
          props.datasrc.map((el, idx) => {
            return (
              tabnum === idx && <section>

                <div className="subscribe-wrap" key={`div${idx}`}>
                  <a href="" className={subscribecard.ssh}>
                    <img className='rounded-circle' src={el.imgsrc} alt="" />
                    <p className="box-name">{el.nm}</p>
                  </a>
                </div>
              </section>
            )
          })
        }
      </section>


    </>
  )
}

export default SubscribeCard
