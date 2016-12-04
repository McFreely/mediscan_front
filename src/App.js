import React, { Component } from 'react';
import URL from 'url-parse';
import { parseCis } from './utils';
import './App.css';

class App extends Component {
    render() {
        const path = window.location.toString();
        const url = new URL(path); 
        const code = url.pathname.split('/')[1];

        // TODO switch between Scan and Details here
        let idCode = "";
        if (code !== "") {
            idCode = parseCis(code).aggreement;
        }

        return (
            <div className="App">
            <a className="scanButton" href="http://zxing.appspot.com/scan?ret=https%3A%2F%2Fmediscan.localtunnel.me%2F%7BCODE%7D&SCAN_FORMATS=UPC_A,EAN_13,DATAMATRIX">Take a qr code</a>
            <p>CIS: {idCode}</p>
            </div>
        );
    }
}


export default App;
