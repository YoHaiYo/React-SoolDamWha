

import React, { useState } from 'react';
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
import Product from './section/Product';
import Category from './workroom/JY/Category';
import Review from './section/Review';

// data
import sdhdata from './data/sdhdata.json'
import datasrc from './data/ssh.json'

import LanguageSwitcher from './LanguageSwitcher'; // 새로 추가한 부분

const King = () => {
  const [language, setLanguage] = useState('ko'); // 초기 언어는 'ko'

  // changeLanguage : useState로 작성된 setLanguage로 언어선택 텍스트를 바꿔주는 함수
  // language : 각 컴포넌트에 뿌리는 datasrc의 객체접근을 ko,en 으로 변경해주는 변수
  const changeLanguage = (newLanguage) => { 
    setLanguage(newLanguage);
  };

  return (
    <>
      <LanguageSwitcher changeLanguage={changeLanguage} /> {/* 언어 변경 컴포넌트 추가 */}
      <Header />
      <Subscribe datasrc={datasrc[language].subscribe} />
      <Best datasrc={datasrc[language].bestswiper} />
      <Product datasrc={datasrc[language].product} />
      {/* <Category sdhdt={datasrc[language].product}></Category> */}
      <Review />
      <Footer />
    </>
  );
};

export default King;


