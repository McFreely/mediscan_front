import React, { Component } from 'react';
import URL from 'url-parse';
import { parseCis } from './utils';
import './App.css';
import Scan from './Scan';
import Detail from './Detail';

class App extends Component {
    render() {
        const path = window.location.toString();
        const url = new URL(path); 
        const code = url.pathname.split('/')[1];

        // TODO switch between Scan and Details here
        let idCode = "";
        if (code !== "") { idCode = parseCis(code).aggreement; }

        return (
            <div className="App">
                {idCode === "" ? <Scan /> : <Detail code={idCode} /> }
            </div>
        );
    }
}


export default App;
