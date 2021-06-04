import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Main from './Main';
import Settings from './Settings';

export class Autentificated extends Component {
    render() {
        return (
            <div>
                 <Router>
                    <Switch>
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/settings" exact component={Settings}></Route>
                    </Switch>
                </Router>
            </div>
            
        )
    }
}

export default Autentificated
