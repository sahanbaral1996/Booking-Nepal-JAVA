import React from 'react';
import ReactDOM from 'react-dom';

import '../src/assets/sass/style.scss';
import AppRouter from './component/AppRouter';
import "izitoast-react/dist/iziToast.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);