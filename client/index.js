import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'

import App from './components/App'
import Home from './components/Home'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
      </Provider>
    ),
    document.getElementById('app')
  )
})
