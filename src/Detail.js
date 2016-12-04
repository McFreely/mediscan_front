import React, { Component } from 'react';
import logo from './logo.svg';
import AnonymousUserPict from './anonymous.svg';
import illustrationPills from './illustrationSirup.svg';
import illustrationCar from './illustrationCar.svg';
import illustrationPregnant from './illustrationPregnant.svg';
import illustrationSun from './illustrationSun.svg';
import illustrationExpire from './illustrationExpire.svg';
import './Mediscan.min.css';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
				<button className="icon-arrow-left DetailBackButton"></button>
        <div className="DetailHeader">
					<img src={illustrationPills} className="DetailHeaderPicture" alt="user" />
					<h2 className="DetailHeaderTitle">Doliprane</h2>
				</div>
				<div className="DetailDCI">Paracetamol 50g</div>
				<div className="DetailPage">
					<div className="DetailCustomWarning">
						<img src={logo} className="DetailCustomWarningPicture" alt="user" />
						<div className="DetailCustomWarningText">
							<h3>NE PAS MANGER CETTE MERDE !!!!</h3>
							<p>Bli bla blou</p>
						</div>
					</div>
					<hr />
					<div className="DetailGeneralWarning">
						<div className="warning">
							<img src={illustrationCar} className="DetailWarningPicture" alt="user" />
						</div>
						<div className="warning">
							<img src={illustrationPregnant} className="DetailWarningPicture" alt="user" />
						</div>
						<div className="warning">
							<img src={illustrationSun} className="DetailWarningPicture" alt="user" />
						</div>
						<div className="warning">
							<img src={illustrationExpire} className="DetailWarningPicture" alt="user" />
						</div>
					</div>

					<div className="DetailPosologie">
						<h3>Posologie</h3>
						<p>Lorem ipsum</p>
					</div>
					<div className="DetailAllergie">
						<h3>Allergies</h3>
						<p>Lorem ipsum</p>
						<ul>
							<li>COUCOU PAUL</li>
						</ul>
					</div>

					<div className="alignCenter">
						<a href="#" className="btnReadMore">
							plus d'information
						</a>
						<p><i>Effets secondaires, composition, ...</i></p>
					</div>
				</div>
      </div>
    );
  }
}

export default Detail;
