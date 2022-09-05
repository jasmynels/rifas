import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import Providers from './providers/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
