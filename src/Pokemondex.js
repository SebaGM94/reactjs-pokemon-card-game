import React, { Component } from 'react';
import Pokemoncard from './Pokemoncard'
import './Pokemondex.scss'
class Pokemondex extends Component {
    
    render() {

        return(
            <div className="Pokemondex">
                <h1 className="Pokemondex__title">Pokemondex {this.props.hand}</h1>
                <p>Total experience: {this.props.exp}</p>
                {this.props.isWinner && 
                <p style={{color: 'red', fontWeight: "bold"}}>{this.props.hand} wins !</p>
                }
                <div className="Pokemondex__cards">
                    {this.props.pokemon.map((item) => (
                        <Pokemoncard 
                        id= {item.id} 
                        name = {item.name} 
                        type = {item.type} 
                        exp = {item.exp}
                        />
                        ))}
                </div>
            </div>

        )
    }
 
}
export default Pokemondex;