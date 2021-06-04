import React, { Component } from 'react'
import BottomNavBar from './Main/BottomNavBar'
import TopNavBar from './Main/TopNavBar'

class Settings extends Component {
    render() {
        return (
            <div>
                <TopNavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-none d-md-inline col-12 col-md-3">text</div>
                        <div className="col-12 col-md-6">
                            <div className="settingsBox rounded border border-gray px-3 mx-sm-5">
                                <h3 className="text-center">
                                    Settings
                                </h3>
                                <div className="">
                                    <a href="#"><u>LOGOUT</u></a>
                                    <div className="d-flex mt-2">
                                        <p>Name: </p>
                                        <p className="mx-3"><u>Username</u></p>
                                    </div>
                                    <a href="#"><u>DELETE ACCOUNT</u></a>
                                </div>
                            </div>   
                        </div>
                        <div className="d-none d-md-inline col-12 col-md-3">text</div>
                    </div>
                </div>
                <BottomNavBar />
            </div>
            
        )
    }
}

export default Settings
