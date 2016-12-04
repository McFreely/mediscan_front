import React, { Component } from 'react';
import logo from './logo.svg';
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
				<button className="icon-change"></button>
        <div className="DetailHeader">
					<img src={logo} className="DetailHeaderPicture" alt="user" />
					<h2 className="DetailHeaderTitle">{this.props.code}</h2>
				</div>
				<div className="DetailDCI">Paracetamol 50g</div>
				<div className="DetailPage">
					<div className="DetailCustomWarning">
						<img src={logo} className="DetailHeaderPicture" alt="user" />
						<div className="DetailCustomWarningText">
							<h3>NE PAS MANGER CETTE MERDE !!!!</h3>
							<p>Bli bla blou</p>
						</div>
					</div>
					<hr />
					<div className="DetailGeneralWarning">
						<div className="warning">
							<i className="icon-change"></i>
						</div>
						<div className="warning">
							<i className="icon-change"></i>
						</div>
						<div className="warning">
							<i className="icon-change"></i>
						</div>
					</div>

					<div className="DetailPosologie">
						<h3>Posologie</h3>
						<p>Lorem ipsum</p>
					</div>
					<div className="DetailAllergie">
						<h3>Posologie</h3>
						<p>Lorem ipsum</p>
						<ul>
							<li>COUCOU PAUL</li>
						</ul>
					</div>

					<a href="#" className="btnReadMore">
						plus d'information
					</a>
					<p><i>Effets secondaires, composition, ...</i></p>
				</div>
      </div>
    );
  }
}

export default Detail;
