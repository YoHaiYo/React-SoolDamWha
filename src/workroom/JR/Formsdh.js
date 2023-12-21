import React from 'react';

function Formsdh() {
  return (
    <section id="contact" class="mx-auto wrap">

      <h2 class="text-center">
        <a>입점문의</a>
      </h2>

      <div class="contactbox d-flex">
        <form action="#" name="contact-info" method="post" class="containe">
          <div class="text-center">
            <div class="d-flex justify-content-center align-content-center">
              <div id="n-c-e" class="d-flex flex-column">

                <div class="him h-100">
                  <label for="name" class="me-4">이름</label>
                  <input class="ms-4" type="text" name="name" placeholder="이름" required />
                </div>

                <div class="him h-100">
                  <label for="num">전화번호</label>
                  <input type="text" name="num" placeholder="010-0000-0000" required />
                </div>

                <div class="him h-100 ">
                  <label for="email">이메일</label>
                  <input class="ms-3" type="email" name="email" placeholder="example@example.com" required />
                </div>
              </div>

              <div class="him h-100 w-100" id="c-m">
                <label for="message">메시지</label>
                <textarea id="message" name="message" cols="19" rows="5" placeholder="메세지를 입력해주세요^^" required
                  ></textarea>
              </div>
            </div>

            <div id="send">
              <div>

                <label for="agree">개인정보수집 이용 동의</label>
                <input type="checkbox" id="agree" />
                  <input type="submit" name="send-btn" value="보내기" onclick='sendInfo()' class="sooldam-btn mt-3" />

                  </div>
              </div>
            </div>
        </form>
      </div>
    </section>

  );
}

export default Formsdh;
