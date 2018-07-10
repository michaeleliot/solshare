// src/App.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HelloWorld} />
                    <Route path="**" component={HelloWorld} />
                </Switch>
            </div>
        );
    }
}
export default App;
