

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
      {/* <Category sdhdt={sdhdata[language].product}></Category> */}
      <Review />
      <Footer />
    </>
  );
};

export default King;

