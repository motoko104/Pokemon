import React, {Component} from 'react';
import './Pokecard.css';

const Poke_API = 'http://www.pokestadium.com/sprites/xy/';

class Pokecard extends Component{
    render() {
        let lowerName = `${(this.props.name).toLowerCase()}`
        let imgSrc = `${Poke_API}${lowerName}.gif`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc}/>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div> 
            </div>
        );
    }
}

export default Pokecard;