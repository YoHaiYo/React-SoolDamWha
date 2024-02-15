import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import King from './King.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <King />
  </BrowserRouter>
  // </React.StrictMode>
);