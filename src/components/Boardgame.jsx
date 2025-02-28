import React from "react";
import help from './helper';
import '../App.css';


const Game = (props) => {
    const images = import.meta.glob('/src/game/*.{png,jpg,jpeg,webp,avif}',{eager:true});
    const imgs = help(images);
    return (
        <td className={'Event'+props.name.split('.')[0]}>
        
        <img src={imgs[props.imgsrc] || 'can.jpg'} alt={props.name} />
        <h1>{props.name.split('.')[0]}</h1>
        <h3>{props.nation}</h3>
        <a href={props.link}>
            <button>View Game</button>
        </a>
        </td>
    )
}
export default Game;