import React from 'react';
import classes from './Modal.css';
import { _modalStyle } from './modalUtils';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

const Modal = props => (
    <Aux>
        <Backdrop show={props.show}/>
        <div className={classes.Modal} 
            style={_modalStyle(props.show)}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;