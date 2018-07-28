/**
NOTE ON STARTING THE APP
npm run dev to start the server
mongod to start the sql database
- if no data shows up, switch the flag in server/app.js
*/


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
