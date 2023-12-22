import React from 'react';

const LanguageSwitcher = ({ changeLanguage }) => {
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>영어로 변경</button>
      <button onClick={() => changeLanguage('ko')}>한국어로 변경</button>
    </div>
  );
};

export default LanguageSwitcher;
