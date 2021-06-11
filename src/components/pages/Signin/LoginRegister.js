import React, { Component } from 'react'

class LoginRegister extends Component {

    handleLogIn() {
        localStorage.setItem("token", "abcdasadsfe")
    }

    render() {
        return (
            <div className="absoluteCenter">
                <h3 className="text-center text-primary">
                    FEISBUCIUC
                </h3>
                <div className="py-2 border border-secondary rounded">
                    <h5 className="text-center">Login/Register</h5>
                    <form className="p-4">
                        <div className="form-group row">
                            <label htmlFor="inputUser" className="col-sm-2 col-form-label">User:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputUser" placeholder="User" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Pass:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12 text-center">
                                <button type="submit" onClick={this.handleLogIn} className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12 text-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginRegister
