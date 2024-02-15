import React, { useState } from 'react';





function Formsdh() {

  const [showForm, setShowform] = useState(false)
  const toggleform = () => {
    setShowform((prevShowform) => !prevShowform)
  }



  return (
    <div className='text-center fixed-bottom'>

      <button className={`formbtn ${showForm ? "close" : "open"}`} onClick={toggleform}>
        {`${showForm ? "close" : "입점문의"}`}</button>
      {showForm && (<div style={{ backgroundColor: "#71b6f1", margin: "0", borderTop: "rgba(141, 180, 238, 1)" }}>
        <section id="contact" className="mx-auto wrap">

          <h2 class="text-center">
            <a href='/'>입점문의</a>
          </h2>

          <div className="contactbox">
            <form action="#" name="contact-info" method="post" className="container">
              <div className="text-center ">
                <div className="infoform row">

                  <div className="flex-column">
                    <div className='d-flex'>
                      <div className="him h-100 col-6 himname">
                        <label for="name" className="me-4">이름</label>
                        <input className="ms-4" type="text" name="name" placeholder="이름" required />
                      </div>
                      <div className="him h-100 col-6 himcall">
                        <label for="num">전화번호</label>
                        <input type="text" name="num" placeholder="010-0000-0000" required />
                      </div>
                    </div>

                    <div className="him h-80 col-12">
                      <label for="email">이메일</label>
                      <input className="ms-3" type="email" name="email" placeholder="example@example.com" required />
                    </div>
                  </div>

                  <div className=" cm him">
                    <label for="message">메시지</label>
                    <textarea className="message" name="message" cols="19" rows="5" placeholder="메세지를 입력해주세요^^" required
                    ></textarea>
                  </div>
                </div>

                <div id="send">
                  <div>

                    <label for="agree">개인정보수집 이용 동의</label>
                    <input type="checkbox" id="agree" />
                    <input type="submit" name="send-btn" value="보내기" onclick='sendInfo()' className="sooldam-btn mt-3" />

                  </div>
                </div>
              </div>
            </form>
          </div>
        </section></div>)}
    </div>

  );
}

export default Formsdh;