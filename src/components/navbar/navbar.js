import React from 'react';
import './navbar.css';


const Navbar = props => (

//<!-- As a heading -->
<nav className="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">Memory Game</span>
  <span className="navbar-brand mb-0 h1 mx-auto">Click an image to score</span>
  <span className="navbar-brand mb-0 h1">Score: {props.score}</span>
  <span className="navbar-brand mb-0 h1">Top-Score: {props.topScore}</span>
</nav>
);

export default Navbar;