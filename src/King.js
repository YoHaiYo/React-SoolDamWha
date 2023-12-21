
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
// import Product from './section/Product';
import Category from './workroom/JY/Category';
import Review from './section/Review';

// data
import sdhdata from './data/sdhdata.json'
import datasrc from './data/ssh.json'

// King의 영어/한국어 변수를 props로 받아서 영/문 바꾸기?
function King() {
  return (
    <>    
      <Header />
      <Subscribe datasrc={datasrc.subscribe}/>
      <Best datasrc={datasrc.bestswiper} />
      {/* <Product datasrc={datasrc.product}/> */}
      <Category sdhdt={sdhdata.product}></Category>
      <Review></Review>
      <Footer />
    </>
  );
}

export default King;
