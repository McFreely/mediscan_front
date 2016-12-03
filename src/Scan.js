import React, { Component } from 'react';
import logo from './logo.svg';
import './Mediscan.min.css';

class Scan extends Component {
  render() {
    return (
      <div className="scanPage">
        <div className="scanPageHeader">
					<img src={logo} alt="user" />
          <h2>Anonymous <b>Guy</b></h2>
					<i className="icon-switch"></i>
        </div>
				<div className="scanPageScanButton">
					
				</div>
      </div>
    );
  }
}

export default Scan;
