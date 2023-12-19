import React from 'react';
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import sdhdata from './data/sdhdata.json'
import Category from './workroom/JY/Category';

function King() {
  return (
    <>
      <Header />
      <Subscribe />
      <Category sdhdt={sdhdata.product}></Category>
      <Footer />
    </>
  );
}

export default King;
