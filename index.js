import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import User from './app/screens/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
<script src="js/reactjs/main.js" type = "text/babel"></script>
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('container')
);
