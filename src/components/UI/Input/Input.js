import React from 'react';
import classes from './Input.css';

const Input = props => {
    return (
        <div>
            <label>{props.label}</label>
            {getInputElement(props)}
        </div>
    );
}

const getInputElement = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case ('textarea'): inputElement = <textarea className={classes.InputElement} {...props}/>
        case ('input'): inputElement = <input className={classes.Input} {...props}/>
        default: inputElement = <input className={classes.Label} {...props}/>
    }
    return inputElement;
}

export default Input;
