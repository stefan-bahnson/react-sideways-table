import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store/store'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);