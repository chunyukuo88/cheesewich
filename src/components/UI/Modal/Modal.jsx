import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

const Modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={modalStyle(props.show)}>
            {props.children}
        </div>
    </Aux>
);

const childrenOrShowHaveChanged = (prevProps, nextProps) => (
    prevProps.show === nextProps.show && prevProps.children === nextProps.children
);

const modalStyle = modalShouldBeDisplayed => {
    return {
        transform: modalShouldBeDisplayed  ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShouldBeDisplayed ? '1' : '0'
    };
};

export default React.memo(Modal, (previousProps, nextProps) => {
    childrenOrShowHaveChanged(previousProps, nextProps);
});
