import React, { Component } from 'react';
import logo from './logo.svg';
import userPict from './anonymous.svg';
import './Mediscan.min.css';

class Scan extends Component {
  render() {
    return (
      <div className="scanPage">
        <div className="scanPageHeader">
					<img src={userPict} className="scanPageUserPicture" alt="user" />
          <h2>Anonymous <b>Guy</b></h2>
					<i className="icon-change"></i>
        </div>
				<div className="scanPageScanButton">
					<div className="scanIllustration">
						<img src={logo} alt="Scan illustration" />
						<p>Toucher pour scanner</p>
					</div>
				</div>
      </div>
    );
  }
}

export default Scan;
