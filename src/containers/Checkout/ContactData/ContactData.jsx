import React, { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import { buildForm,
         buildFormData,
         buildInputFieldObject,
         buildOrderForAxios,
         checkValidity,
         getDeliveryMethodObject,
         mapOrderFormToArray } from './contactDataUtils';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm: {
            name: buildInputFieldObject('Your name'),
            street: buildInputFieldObject('Street'),
            zipCode: buildInputFieldObject('ZIP Code', 5, 5),
            country: buildInputFieldObject('Country'),
            email: buildInputFieldObject('Email', null, null, 'email'),
            deliveryMethod: getDeliveryMethodObject()
        },
        formIsValid: false,
        loading: false,
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = buildFormData(this.state);
        const order = buildOrderForAxios(this.props, formData);
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = mapOrderFormToArray(this.state.orderForm);
        const form = buildForm(this.state, this.inputChangedHandler, this.orderHandler, formElementsArray);
        return (
            <div className={classes.ContactData}>
                <h3>Enter Your Contact Info</h3>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.price,
    };
};


export default connect(mapStateToProps)(ContactData);
