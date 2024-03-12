import { useRef, useState, useEffect } from "react";
import React from 'react'

const Qna = (props) => {
  const faq = useRef(null);
  const [shownum, numupdate] = useState(null);
  const [act, setAct] = useState(false);



  return (
    <section ref={faq} id="faq" className="align-items-center container" style={{ marginTop: "280px", marginBottom: "100px", width: "50%" }}>
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


      <div id="qna">
        <div className="qnabox">
          <form action="#" name="contact-info" method="post" className="container">

            <div className="text-center">
              <h2>Q.입점문의</h2>
              <div className='nmemailzone'>
                <div className="nmzone p-1">
                  <label for="name">성함</label>
                  <input className="" type="text" name="name" placeholder="성함" required />
                </div>

                <div className="emailzsone p-1">
                  <label for="email">이메일</label>
                  <input type="email" name="email" placeholder="example@example.com" required />
                </div>
              </div>


              <div className="msgzone">
                <textarea className="message" name="message" cols="51" rows="5" placeholder="문의사항을 입력해 주시면 이메일로 답변해드려요^^" required></textarea>
              </div>
            </div>

            <div className="send">
              <div>
                <input type="submit" name="send-btn" value="보내기" onclick='sendInfo()' className="sooldam-btn mt-3" />
              </div>
            </div>

          </form>
        </div>
      </div>


    </section>
  )
}

export default Qna;