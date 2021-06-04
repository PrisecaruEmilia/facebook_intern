import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Search from './Search'

class TopNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand text-primary">FEISBUCIUC</Link>
                <ul className="nav navbar-nav navbar-right d-inline">
                   <Search />
                   <Avatar />
                </ul>
            </nav>
        )
    }
}

export default TopNavBar
