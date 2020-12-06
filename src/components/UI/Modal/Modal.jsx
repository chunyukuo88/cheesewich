import React, { Component } from 'react';
import classes from './Modal.css';
import { modalStyle, childrenOrShowHaveChanged } from './modalUtils';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

class Modal extends Component {

    shouldComponentUpdate = (nextProps, nextState) => childrenOrShowHaveChanged(nextProps, this.props);

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} 
                    style={modalStyle(this.props.show)}>
                    {this.props.children}
                </div>
            </Aux>
        );
    };
}



export default Modal;