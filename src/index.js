import React from 'react';
import ReactDOM from 'react-dom';
import splitbee from '@splitbee/web';

import App from './App';

import './styles/main.scss';

splitbee.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
