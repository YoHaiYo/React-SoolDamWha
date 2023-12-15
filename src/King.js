
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Best from './section/Best';

// data
import datasrc from './data/ssh.json'

function King() {
  return (
    <>    
      <Header />
      <Subscribe />
      <Best datasrc={datasrc.bestswiper} />
      <Footer />
    </>
  );
}

export default King;
