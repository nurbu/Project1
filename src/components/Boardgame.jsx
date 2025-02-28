import React from "react";
import help from './helper';
import '../css/game.css';


const Game = (props) => {
    const images = import.meta.glob('/src/game/*.{png,jpg,jpeg,webp,avif}',{eager:true});
    const imgs = help(images);
    let header = props.name.split('.')[0];
    return (
        <td className={'Game'}>
        
        <img className='imgimg' src={imgs[props.imgsrc] || 'can.jpg'} alt={props.name} />
        <h1 className="imgheader">{header}</h1>
        <a href={props.link}>
            <button>View Game</button>
        </a>
        </td>
    )
}
export default Game;