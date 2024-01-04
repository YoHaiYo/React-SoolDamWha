import React, { useState } from 'react';





function Formsdh() {

  const [showForm, setShowform] = useState(false)
  const toggleform = () => {
    setShowform((prevShowform) => !prevShowform)
  }



  return (
    <div className='text-center '>
      <button onClick={toggleform} style={{ border: "1px solid #fff", backgroundColor: "#3395ED", marginBottom: "0" }}>{`${showForm ? "close" : "show"}`}</button>
      {showForm && (<div style={{ backgroundColor: "#3395ED", marginTop: "0" }}><section id="contact" className="mx-auto wrap">

        <h2 class="text-center">
          <a>입점문의</a>
        </h2>

        <div className="contactbox d-flex">
          <form action="#" name="contact-info" method="post" className="containe">
            <div className="text-center">
              <div className="infoform">
                <div id="n-c-e" className="d-flex flex-column">

                  <div className="him h-100">
                    <label for="name" className="me-4">이름</label>
                    <input className="ms-4" type="text" name="name" placeholder="이름" required />
                  </div>

                  <div className="him h-100">
                    <label for="num">전화번호</label>
                    <input type="text" name="num" placeholder="010-0000-0000" required />
                  </div>

                  <div className="him h-100">
                    <label for="email">이메일</label>
                    <input className="ms-3" type="email" name="email" placeholder="example@example.com" required />
                  </div>
                </div>

                <div className=" c-m him h-100 w-100" id="">
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