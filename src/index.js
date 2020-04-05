import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './screens/Signup';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Profile from './screens/Profile';
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Signup} />
      <Route exact path='/signup' component={Signup} />
      {/* <Route exact path='/login' component={Login} /> */}
      <Route path='/profile' component={Profile} />
    </div>
</BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
