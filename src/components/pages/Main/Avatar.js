import React, { Component } from 'react'

class Avatar extends Component {
    render() {
        return (
            <div className="d-inline">
                <img className="avatar" src="/logo192.png" alt="avatar"/>
                <span>Username</span>
            </div>
        )
    }
}

export default Avatar
