
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Review from './section/Review';

function King() {
  return (
    <>
      <Header />
      <Subscribe />
      {/* <ContactForm></ContactForm> */}
      <Review></Review>
      <Footer />
    </>
  );
}

export default King;
