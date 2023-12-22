import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer id="fd">
      <div class="container">
        <h2><a href=""></a></h2>

        <div class="fdinfoArea d-flex justify-content-between">
          <div class="ftinfo">
            <div class="ftdesc">
              <p>대표 : OOO</p>
              <p>사업자등록번호 : 000-00-00000</p>
              <p>주소 : 서울특별시 서초구 강남대로 527, 10층(브랜드칸타워, 술담화)</p>
              <p>대표 전화 : 070-1234-5678</p>
              <p>이메일 : info@sooldamhwa.com </p>
            </div>
            <ul class="ftinfoUrl d-flex">
              <li><a href="">개인정보 처리방침</a></li>
              <li><a href="">이용약관</a></li>
              <li><a href="">입점문의</a></li>
            </ul>
          </div>
          <div class="rightFtInfo">
            <span>담화컴퍼니 주식회사</span>
            <p>고객센터: 070-5014-1282</p>
            <p>평일 10:00 - 18:00, 주말 휴무</p>
            <ul class="sns d-flex justify-content-between">
              <li><a href=""><i class="bi bi-facebook"></i></a></li>
              <li><a href=""><i class="bi bi-instagram"></i></a></li>
              <li><a href=""><i class="bi bi-twitter"></i></a></li>
              <li><a href=""><i class="bi bi-youtube"></i></a></li>
              <li><a href=""><i class="bi bi-google"></i></a></li>
            </ul>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer
