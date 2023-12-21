
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';
import Review from './section/Review';
import Form from './data/form.json';

function King() {
  return (
    <>
      <Header />
      <Subscribe />
      <Review></Review>
      <Form />
      <Footer />
    </>
  );
}

export default King;
