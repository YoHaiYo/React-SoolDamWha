import { useRef, useState, useEffect } from "react";
import React from 'react'

const Qna = (props) => {
  const faq = useRef(null);
  const [shownum, numupdate] = useState(null);
  const [act, setAct] = useState(false);



  return (
    <section ref={faq} id="faq" className="align-items-center" style={{ marginTop: "280px", marginBottom: "100px" }}>
      <h2>Q. 자주묻는 질문</h2><br /><br />
      <div className="d-flex justify-content-center align-items-center">
        <ul>
          {
            props.datasrc.map((e, i) => {

              return (
                <li key={i}>
                  <h3 onClick={() => {
                    numupdate(i);
                    setAct(!act);
                  }} className={act ? 'act' : ''}>{e.question}

                  </h3>

                  {<div className={act ? 'act' : ''}>{
                    e.answer.split('/').map((e, i) => {
                      return (
                        <React.Fragment key={i}>
                          {e}
                          <br />
                        </React.Fragment>
                      )
                    })
                  }</div>
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Qna;