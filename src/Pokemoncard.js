import React , { Component } from 'react';
import './Pokemoncard.scss'
const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokemoncard extends Component {
    render () {
        const {name, type, exp} = this.props
        let imageSrc = `${POKEMON_API}${this.props.id}.png`
        return (
            <div className ="Pokemoncard">
                <h1 className="Pokemoncard__name">{name}</h1>
                <img src = {imageSrc} alt = {name} />
                <div className="Pokemoncard__data">Type: {type} </div>
                <div className="Pokemoncard__data">Experience: {exp} </div>
            </div>
        )
    }
}

export default Pokemoncard