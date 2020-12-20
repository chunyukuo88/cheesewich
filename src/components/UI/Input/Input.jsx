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
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} value={props.value} {...props.elementConfig}/>;
            break;
        case ('input'):
            inputElement = <input className={classes.Input} value={props.value} {...props.elementConfig}/>;
            break;
        case ('select'):
            inputElement = <select className={classes.Input} value={props.value} {...props.elementConfig}>
                                {props.elementConfig.options.map(option => (
                                    <option value={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                           </select>;
        break;
        default: inputElement = <input className={classes.Label}
                                       value={props.value}
                                       {...props.elementConfig}/>; break;
    }
    return inputElement;
}

export default Input;
