import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position={'top-center'}
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
      limit={1}
      transition={Slide}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
