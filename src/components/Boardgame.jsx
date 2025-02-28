import React from "react";

const game = (props) => {
    
    return (
        <td className={'Event'+props.name}>
        <img src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <h3>{props.nation}</h3>
        <a href={props.link}>
            <button>View Game</button>
        </a>
        </td>
    )
}
export default game