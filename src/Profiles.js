import React, { Component } from 'react';
import logo from './logo.svg';
import AnonymousUserPict from './anonymous.svg';
import './Mediscan.min.css';

class Profiles extends Component {
  render() {
    return (
      <div className="ProfilesPage">
				<img src={logo} className="ProfilesLogo" alt="profiles" />
				<h1 className="ProfilesPageTitle">Mediscan</h1>

				<ul className="ProfilesList">
					<li>
						<img src={AnonymousUserPict} className="ProfileUserPicture" alt="user" />
						<h2>Anonyme</h2>
						<i className="icon-arrow-right"></i>
					</li>
					<li>
						<div className="ProfileAdd">
							<i className="icon-plus"></i>
						</div>
						<h2>Ajouter un profil</h2>
					</li>
				</ul>
			</div>
    );
  }
}

export default Profiles;
