import React, { Component } from 'react';
import classes from './Modal.css';
import { _modalStyle } from './modalUtils';
import Backdrop from '../Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return (nextProps.show !== this.props.show 
             || nextProps.children !== this.props.children);
    }

    componentDidUpdate = () => console.log('Modal was updated');

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} 
                    style={_modalStyle(this.props.show)}>
                    {this.props.children}
                </div>
            </Aux>
        );
    };
}

export default Modal;