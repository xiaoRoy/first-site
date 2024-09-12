import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Title from './chapters/chap2/nestingElements';
import reportWebVitals from './reportWebVitals';
import TitleDiv from './chapters/chap2/siblingDiv';
import TitleFragment from './chapters/chap2/siblingFragment';
import Links from './chapters/chap2/link';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Links />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();