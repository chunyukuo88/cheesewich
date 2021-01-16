import React, { memo } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

const Modal = memo((props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
             style={modalStyle(props.show)}>
            {props.children}
        </div>
    </Aux>
));

const modalStyle = show => show ? modalShowing : modalHidden;

const modalShowing = {
    transform: 'translateY(0)',
    opacity: '1'
}

const modalHidden = {
    transform: 'translateY(-100vh)',
    opacity: '0'
}

export default Modal;
