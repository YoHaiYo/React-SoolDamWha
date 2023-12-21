
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
import Product from './section/Product';

// data
import datasrc from './data/ssh.json'

// King의 영어/한국어 변수를 props로 받아서 영/문 바꾸기?
function King() {
  return (
    <>    
      <Header />
      <Subscribe datasrc={datasrc.subscribe}/>
      <Best datasrc={datasrc.bestswiper} />
      <Product datasrc={datasrc.product}/>
      <Footer />
    </>
  );
}

export default King;
