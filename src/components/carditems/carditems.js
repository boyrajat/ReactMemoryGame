import React from 'react';
import './carditems.css';

const CardItems = props => (
    // <div className = 'container col-md-12'>
        <img onClick = {() => props.sortGifs(props.id, props.clicked)} id = {props.id} src = {props.src} className = "img-fluid" alt = "game-images" data-clicked = {props.clicked}/>
         
    // </div>
  

);

export default CardItems;