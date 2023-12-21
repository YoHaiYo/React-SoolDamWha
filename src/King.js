
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Review from './section/Review';
import Form from './workroom/JR/form';

function King() {
  return (
    <>
      <Header />
      <Subscribe />
      {/* <ContactForm></ContactForm> */}
      <Review></Review>
      <Form />
      <Footer />
    </>
  );
}

export default King;
