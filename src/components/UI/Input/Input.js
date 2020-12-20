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
        case ('input'): inputElement = <input className={classes.Input} {...props}/>
        case ('textarea'): inputElement = <textarea className={classes.InputElement} {...props}/>
        default: inputElement = <input className={classes.Label} {...props}/>
    }
    return inputElement;
}

export default Input;
