import React from 'react';
import classes from './Modal.css';
import { _modalStyle } from './modalUtils';

const Modal = props => (
    <div className={classes.Modal} 
         style={_modalStyle(props.show)}>
        {props.children}
    </div>
);

export default Modal;