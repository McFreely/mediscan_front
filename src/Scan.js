import React, { Component } from 'react';
import logo from './anonymous.svg';
import './Mediscan.min.css';

class Scan extends Component {
    render() {
        return (
            <div className="scanPage">
                <div className="scanPageHeader">
                    <img src={logo} className="scanPageUserPicture" alt="user" />
                    <h2>Anonymous <b>Guy</b></h2>
                    <i className="icon-change"></i>
                </div>
                <div className="scanPageScanButton">
                    <a className="scanButton" href="http://zxing.appspot.com/scan?ret=https%3A%2F%2Fmediscan.localtunnel.me%2F%7BCODE%7D&SCAN_FORMATS=UPC_A,EAN_13,DATAMATRIX">
                        <div className="scanIllustration">
                            <img src={logo} alt="Scan illustration" />
                            <p>Toucher pour scanner</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Scan;
