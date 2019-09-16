import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


//change to only display 4 pokemon for each team, only.
class Pokedex extends Component {
    render() {
        return (
            <div className={this.props.isWinner ? 'Pokedex winner' : 'Pokedex loser'}>
                <h1>{this.props.isWinner ? 'Winner!' : 'Loser'}</h1>
                <p>Total Experience: {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;