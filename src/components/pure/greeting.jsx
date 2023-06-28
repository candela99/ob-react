import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age : 23
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>Tu edad es de: {this.state.age}</h2>
            </div>
        );
    }
}

/*
* Los propTypes son contenidos que puedo pasar a un componente de orden superior
*/
Greeting.propTypes = {

};


export default Greeting;
