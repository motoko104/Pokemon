import React, { Component } from 'react';
import Pokemon from "./Pokemon";
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: Pokemon,
    }
    render() {
        let hand1 = [];
        let hand2 = [];
        for(let i = 0; i < 8; i++){
            let randIdx = Math.floor(Math.random() * Pokemon.length);
            let randPokemon = Pokemon.splice(randIdx, 1)[0];
            if(i <= 3){
                hand1.push(randPokemon);
            }
            else{
                hand2.push(randPokemon);
            }
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;