import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('button')
)

reportWebVitals();
