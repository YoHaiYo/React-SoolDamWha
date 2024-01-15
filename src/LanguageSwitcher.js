import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const LanguageSwitcher = ({ changeLanguage }) => {

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className='d-flex position-fixed loginbox'>
      <ul id="login" className='d-flex'>
        <li className='me-5'><a href="/">로그인</a></li>
        <li className='me-5'><a href="/">회원가입</a></li>
      </ul>
      {/*  버튼식으로 표현하기 */}
      {/* <button onClick={() => changeLanguage('en')}>영어로 변경</button>
    <button onClick={() => changeLanguage('ko')}>한국어로 변경</button> */}


      <select id="languageSelect" onChange={handleLanguageChange}>
        {/* 기본선택 언어를 제일 위로 놓기 */}
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;