import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    myAge = 29;

    constructor(props) {
        super(props);
        this.state = {
            age : this.myAge
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    
    birthday = () => {
        /*Si no uso el setState y hago solo this.myAge++, el valor de myAge cambiaría pero la vista no*/
        this.setState((prevState) => ({
            age: prevState.age +1
        }))
    }
}

/*
* Los propTypes son contenidos que puedo pasar a un componente de orden superior
* Definen los tipos de datos que deben tener las props
*/
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
