import React from 'react';
import './cardcontainer.css';

const Cardcontainer = props => (
    <div className="col-md-12">
 {props.children}
  </div>
);

export default Cardcontainer;

