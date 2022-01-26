import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';
//edit

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

