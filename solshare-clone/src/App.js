// src/App.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Feed from './components/Feed'
import Header from './components/Header'
import Login from './components/Login'
class App extends Component {
    render() {
        return (
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Feed}/>
                <Route exact path='/login' component={Login}/>
              </Switch>
            </div>
        );
    }
}
export default App
