import React, {Component} from 'react';
import './Pokecard.css';

const Poke_API = 'http://www.pokestadium.com/sprites/xy/';

class Pokecard extends Component{
    render() {
        let lowerName = `${(this.props.name).toLowerCase()}`
        let imgSrc = `${Poke_API}${lowerName}.gif`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img  alt={this.props.name} className="Pokecard-image" src={imgSrc}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div> 
            </div>
        );
    }
}

export default Pokecard;