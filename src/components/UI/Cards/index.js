import React from 'react';
import './style.css';

const Cards = (props) =>{
    return(
        <div className="cards" style={{width:props.width ? props.width:'100%'}}{...props}>
        {props.children}
        </div>
    )
}
export default Cards;