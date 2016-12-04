import React, { Component } from 'react';
import logo from './logo.svg';
import AnonymousUserPict from './anonymous.svg';
import illustrationPills from './illustrationPills.svg';
import illustrationCar from './illustrationCar.svg';
import illustrationPregnant from './illustrationPregnant.svg';
import illustrationSun from './illustrationSun.svg';
import illustrationExpire from './illustrationExpire.svg';
import './Mediscan.min.css';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }
    
    componentWillMount() {
        const url = `http://placeholder.com/${this.props.code}`;
        // TODO connect for realsies
        // fetch(url)
        //     .then((result) => result.json())
        //     .then((data) => this.setState({ data }))
        //     .catch((error) => console.log(error));
    }

  render() {
    return (
      <div className="Detail">
		<a href="/" className="icon-arrow-left DetailBackButton"></a>
        <div className="DetailHeader">
                <img src={illustrationPills} className="DetailHeaderPicture" alt="user" />
                <h2 className="DetailHeaderTitle">Maxilase</h2>
				</div>
				<div className="DetailDCI">Alpha-Amylase 3000 U.CEIP</div>
				<div className="DetailPage">
					<div className="DetailCustomWarning">
						<img src={illustrationPregnant} className="DetailCustomWarningPicture" alt="user" />
						<div className="DetailCustomWarningText">
							<h3>DECONSEILLé AUX FEMMES ENCEINTE</h3>
							<p>Déconseillé lors de l'allaitement</p>
						</div>
					</div>
					<hr />
					<div className="DetailGeneralWarning">
						<div className="warning">
							<img src={illustrationCar} className="DetailWarningPicture" alt="user" />
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
						<ul>
                            <li>Réservé à l'adulte</li>
                            <li>1 comprimé 3 fois par jour</li>
                            <li>Au cours des repas</li>
                            <li>Ne pas croquer, ne pas ecraser</li>
                        </ul>
					</div>
					<div className="DetailAllergie">
						<h3>Allergies</h3>
						<ul>
							<li>Pas d'allergie notable</li>
						</ul>
					</div>

					<div className="alignCenter">
						<a href="http://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid=60095729" target="_blank" className="btnReadMore">
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
