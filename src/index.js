import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    AOS.init({
      duration: 1100,
      easing: 'ease-in-out',
      once: false,
    });
  }
);
