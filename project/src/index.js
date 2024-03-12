import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import King from './King.js';
import ScrollToTop from './workroom/SE/ScrollTopTop.js';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <King />
  </BrowserRouter>
  // </React.StrictMode>
);