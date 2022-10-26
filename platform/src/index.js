import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles'
import Router from './Router';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='all'>
    <GlobalStyles/>
    <Router />
  </div>
);
