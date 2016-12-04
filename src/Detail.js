import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }
    
    // TODO componentWillMount
    componentDidMount() {
        const url = `http://placeholder.com/cis/${this.props.url}`;
        // TODO setState here is gross, find better way
        fetch(url)
            .then((result) => result.json())
            .then((data) => this.setState({ data }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            </div>
        );
    }
}

export default Detail;
