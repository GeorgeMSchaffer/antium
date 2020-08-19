import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import store from './app/store'
import './index.css'
//import App from '../App';

function render() {
  console.debug('RENDER INVOKED')
  const App = require('./app/App').default
  //const App = require('App');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}