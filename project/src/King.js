import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

//임의 scss 추가
import './workroom/SE/stylese.scss'

// data
import datasrc from './data/sdhdata.json'

// Section
import Footer from './section/Footer';
// import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
import Product from './section/Product';
import Review from './section/Review';
import Contact from './section/Contact';
import MainSwiper from './workroom/SE/MainSwiper';
import HD from './workroom/SE/Hd';

// Page
import AllPage from './page/Allpage';
import Event from './page/Event';
import Qna from './page/Qna';
import Subscribepage from './page/Subscribepage';

//SQL
import axios from 'axios';
import BestPage from './page/BestPage';

// import LanguageSwitcher from './LanguageSwitcher'; // 새로 추가한 부분

const King = () => {
  const [language, setLanguage] = useState('ko'); // 초기 언어는 'ko'
  const [total, dbtotal] = useState(null);
  // changeLanguage : useState로 작성된 setLanguage로 언어선택 텍스트를 바꿔주는 함수
  // language : 각 컴포넌트에 뿌리는 datasrc의 객체접근을 ko,en 으로 변경해주는 변수
  // const changeLanguage = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };

  useEffect(() => {
    const dbconnect = async (rt) => {
      const [r, t] = rt.split('/');

      const tableArr = ["ms_swiper", "productinfo"]

      try {
        const result = await axios.get(`/${rt}`);
        dbtotal((prevdb) => ({ ...prevdb, [t]: [...result.data] }));
        // console.log(result) // for developer
      } catch (error) {
        console.log(error)
      }
    };
    console.log(datasrc[language].product)
    dbconnect("store/ms_swiper");
    dbconnect("store/productinfo");
    dbconnect("store/gnb")
  }, [])

  return (
    <>
      {/* 네비 */}
      {/* <LanguageSwitcher changeLanguage={changeLanguage} /> 언어 변경 컴포넌트 추가 */}
      {/* <Header datasrc={datasrc[language].header} /> */}
      <HD datasrc={total && total['gnb'] && total['gnb']} setLanguage={setLanguage} />
      <Routes>
        <Route path='/'
          element={<>
            <MainSwiper datasrc={total && total['ms_swiper'] && total['ms_swiper']} />
            <Subscribe datasrc={datasrc[language].subscribe} />
            <Best datasrc={datasrc[language].bestswiper} />
            {total && total['productinfo'] &&
              <Product catesrc={datasrc[language].product}
                datasrc={total['productinfo']}></Product>
            }
            <Review />
            <Contact />
          </>}>
        </Route>

        <Route path='/subscribe'
          element={<>
            <Subscribepage datasrc={datasrc[language].subscribepage}></Subscribepage>
          </>}>
        </Route>

        <Route path='/all' element={<AllPage datasrc={datasrc[language].product} />}></Route>

        <Route path='/best' element={<BestPage datasrc={datasrc[language].bestswiper} />}></Route>

        <Route path='/event'
          element={<>
            <Event datasrc={datasrc[language].header.mainbanner}></Event>
          </>}>
        </Route>

        <Route path='/qna'
          element={<>
            <Qna datasrc={datasrc[language].qna} />
          </>}>
        </Route>

      </Routes>

      <Footer datasrc={datasrc[language].footer} />
    </>
  );
};

export default King;