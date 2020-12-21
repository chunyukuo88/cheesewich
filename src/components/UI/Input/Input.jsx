import React from 'react';
import classes from './Input.css';

const Input = props => (
    <div>
        <label>{props.label}</label>
        {getInputElement(props)}
    </div>
);

const checkForInvalidity = ({ invalid, shouldValidate }, classArray) => {
    if (invalid && shouldValidate) classArray.push(classes.Invalid);
};

const getInputElement = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    checkForInvalidity(props, inputClasses);
    return buildInputElement(props, inputElement, inputClasses);
}

const buildInputElement = (props, inputElement, inputClasses) => {
    //TODO: Improve this after converting everything to classes AND adding Redux to the project.
    switch (props.elementType) {
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                                     onChange={props.changed}
                                     value={props.value}
                                     {...props.elementConfig}/>;
            break;
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')}
                                  onChange={props.changed}
                                  value={props.value}
                                  {...props.elementConfig}/>;
            break;
        case ('select'):
            inputElement = <select className={inputClasses.join(' ')}
                                   onChange={props.changed}
                                   value={props.value}
                                   {...props.elementConfig}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input className={classes.Label}
                                  value={props.value}
                                  {...props.elementConfig}/>;
            break;
    }
    return inputElement;
};

export default Input;
