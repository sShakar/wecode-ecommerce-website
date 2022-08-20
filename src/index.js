import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faBagShopping);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
