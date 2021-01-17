import React from 'react';
import classes from './Modal.css';
import { modalStyle, childrenOrShowHaveChanged } from './modalUtils';
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

export default React.memo(Modal, (previousProps, nextProps) => {
    childrenOrShowHaveChanged(previousProps, nextProps);
});
