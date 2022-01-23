import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';

import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
