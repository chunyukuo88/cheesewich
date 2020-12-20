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
    switch (props.elementType) {
        case ('textarea'): inputElement = <textarea className={classes.InputElement}
                                                    value={props.value}
                                                    {...props.elementType}/>; break;
        case ('input'): inputElement = <input className={classes.Input}
                                              value={props.value}
                                              {...props.elementType}/>; break;
        default: inputElement = <input className={classes.Label}
                                       value={props.value}
                                       {...props.elementType}/>; break;
    }
    return inputElement;
}

export default Input;
