import React from 'react';

const LanguageSwitcher = ({ changeLanguage }) => {

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div>
      <select id="languageSelect" onChange={handleLanguageChange}>
        {/* 기본선택 언어를 제일 위로 놓기 */}
        <option value="ko">한국어</option> 
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
