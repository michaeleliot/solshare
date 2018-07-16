import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
