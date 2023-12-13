import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Section
import Footer from './section/Footer';
import Header from './section/Header';
import Subscribe from './section/Subscribe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Subscribe />
    <Footer />
  </React.StrictMode>
);

