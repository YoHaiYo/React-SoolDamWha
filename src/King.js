
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';
import Product from './section/Product';

// data
import datasrc from './data/ssh.json'

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
