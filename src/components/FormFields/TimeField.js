import React from 'react';
import './master.css'; 


function TimeField(props) {
    return (
        <input value={props.value} className="input-field input-field--time" required />
    );
}

export default TimeField; 