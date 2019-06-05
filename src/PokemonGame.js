import React, { Component } from 'react';
import Pokemondex from './Pokemondex'
class PokemonGame extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander' , type: 'fire' , exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', exp: 148 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 125 },
            { id: 39, name: 'Jigglypuff', type: 'normal', exp: 77 },
            { id: 94, name: 'Gengar', type: 'poison', exp: 143 },
            { id: 133, name: 'Eevee', type: 'normal', exp: 87 },
        ]
    };
    render(){
        let firstHand = []
        let secondHand = [...this.props.pokemon]
        while(firstHand.length < secondHand.length) {
            let randomIdx = Math.floor(Math.random() * secondHand.length);
            let randomPokemon = secondHand.splice(randomIdx, 1)[0]
            firstHand.push(randomPokemon)
        }
        let exp1 = firstHand.reduce((exp, pokemon) => exp + pokemon.exp,
        0);
        let exp2 = secondHand.reduce((exp, pokemon) => exp + pokemon.exp,
        0);
        let firstPlayerWins = false
        let secondPlayerWins = false
        exp1 > exp2 ? firstPlayerWins = true : secondPlayerWins = true
        return(
            <div>
                <Pokemondex pokemon = {firstHand} hand = "Player 1" isWinner = {firstPlayerWins} exp = {exp1} /> 
                <Pokemondex pokemon = {secondHand} hand = "Player 2" isWinner = {secondPlayerWins} exp = {exp2} /> 
            </div>
            )
    }
}

export default PokemonGame;