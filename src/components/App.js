import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Main from './pages/Main'
import Settings from './pages/Settings';
import Signin from './pages/Signin'
import Autentificated from './pages/Autentificated'
import Unautentificated from './pages/Unautentificated'

class App extends Component {


    render() {
        localStorage.setItem("token", "abcdasadsfe")
        let token = localStorage.getItem("token");
        console.log(token);
        // token == "1234ABCD" ? <Autentificated /> : <Unautentificated />
        if(token){
            return (
                <div>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Main}></Route>
                            <Route path="/settings" exact component={Settings}></Route>
                        </Switch>
                    </Router>
                    {/* <Autentificated />  */}
                </div>
            )
        } else {
            return (
                <div>
                    {/* <Unautentificated />  */}
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Signin}></Route>
                        </Switch>
                    </Router>
                </div>
            )
        }
    }
}

export default App

{/* <Route path="/signin" exact component={Signin}></Route>
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/settings" exact component={Settings}></Route> */}