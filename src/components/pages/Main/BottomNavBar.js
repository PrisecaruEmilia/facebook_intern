import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BottomNavBar extends Component {
    render() {
        return (
            <div className="container-fluid pb-3">
                <div className="row">
                    <Link to="/" className="col text-center text-decoration-none text-dark">Home</Link>
                    <Link to="settings" className="col text-center text-decoration-none text-dark">Market</Link>
                    <Link to="settings" className="col text-center text-decoration-none text-dark">Settings</Link>
                    <Link to="Settings" className="col text-center text-decoration-none text-dark">
                        <i className="mt-1 fas fa-bars col text-center"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BottomNavBar
