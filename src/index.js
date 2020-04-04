import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App2} />
      <Route path='/app1' component={App} />
    </div>
</BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
