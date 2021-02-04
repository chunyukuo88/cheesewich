import React, { memo } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

export const Modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
             style={modalStyle(props.show)}
             data-testid="children-container">
            {props.children}
        </div>
    </Aux>
);

const modalStyle = modalShouldBeDisplayed => {
    return {
        transform: modalShouldBeDisplayed  ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShouldBeDisplayed ? '1' : '0'
    };
};

const propsHaveChanged = (prevProps, nextProps) => {
    const result = prevProps.show === nextProps.show
                && prevProps.children === nextProps.children;
    return result;
};

export default memo(Modal, (previousProps, nextProps) => {
    propsHaveChanged(previousProps, nextProps);
});
