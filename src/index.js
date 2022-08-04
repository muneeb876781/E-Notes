import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDo from './ToDo_list';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Main';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);


