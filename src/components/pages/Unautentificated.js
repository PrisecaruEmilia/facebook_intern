import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Signin from './Signin'

export class Unautentificated extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Signin}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Unautentificated
