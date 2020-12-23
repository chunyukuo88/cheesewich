import React from 'react';
import classes from './Input.css';

const Input = props => {
    console.log(props);
    return (<div>
                <label data-test="inputLabel">{props.label}</label>
                {Content(props)}
            </div>);
};

const Content = props => {
    const inputClasses = [classes.InputElement];
    checkForInvalidity(props, inputClasses);
    return buildInputElement(props, inputClasses);
};

const checkForInvalidity = ({ invalid, shouldValidate, touched }, classArray) => {
    if (invalid && shouldValidate && touched) classArray.push(classes.Invalid);
};

const buildInputElement = (props, inputClasses) => {
    //TODO: Improve this after converting everything to classes AND adding Redux to the project.
    switch (props.elementType) {
        case ('textarea'):
            return <textarea className={inputClasses.join(' ')}
                                     onChange={props.changed}
                                     value={props.value}
                                     {...props.elementConfig}/>;
        case ('input'):
            return <input className={inputClasses.join(' ')}
                                  onChange={props.changed}
                                  value={props.value}
                                  {...props.elementConfig}/>;
        case ('select'):
            return <select className={inputClasses.join(' ')}
                                   onChange={props.changed}
                                   value={props.value}
                                   {...props.elementConfig}>
                                    {props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.displayValue}
                                        </option>
                                    ))}
                            </select>;
        default:
            return <input className={classes.Label}
                                  value={props.value}
                                  {...props.elementConfig}/>;
    }
};

export default Input;
