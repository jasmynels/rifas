import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import Providers from './providers/index';import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
    </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
