import React, { Component } from 'react';
import logo from './logo.svg';
import userPict from './anonymous.svg';
import Profiles from './Profiles';
import './Mediscan.min.css';

class Scan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profileOpen: false,
        };
    }

    handleProfile() {
        this.setState({ profileOpen: !this.state.profileOpen });
    }

    render() {
        const scanPage = (
            <div className="scanPage">
                <div className="scanPageHeader">
                    <img src={userPict} className="scanPageUserPicture" alt="user" />
                    <h2>Anonymous <b>Guy</b></h2>
                    <i 
                        className="icon-change"
                        onClick={() => this.handleProfile()}
                    ></i>
                </div>
                <div className="scanPageScanButton">
                    <a className="scanIllustration" href="http://zxing.appspot.com/scan?ret=https%3A%2F%2Fmediscan.localtunnel.me%2F%7BCODE%7D&SCAN_FORMATS=UPC_A,EAN_13,DATAMATRIX">
                        <img src={logo} alt="Scan illustration" />
                        <p>Toucher pour scanner</p>
                    </a>
                </div>
            </div>
        );

        return (
            <div className="banana">
                {this.state.profileOpen ? <Profiles /> : scanPage}
            </div>
        )
    }
}

export default Scan;
