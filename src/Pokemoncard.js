import React , { Component } from 'react';

class Pokemoncard extends Component {
    render () {
        return (
        <div className ="Pokemoncard">
            <h1>{this.props.name}</h1>
            <h1>{this.props.type}</h1>
            <h1>{this.props.exp}</h1>
        </div>
            )
    }
}

export default Pokemoncard