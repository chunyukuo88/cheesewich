import React, { Component } from 'react';
import classes from './ContactData.css';
import { purchaseCheesewich } from '../../../store/actions/order';
import { buildForm,
         buildFormData,
         buildInputFieldObject,
         buildOrderForAxios,
         checkValidity,
         getDeliveryMethodObject,
         mapOrderFormToArray } from './contactDataUtils';
import { connect } from 'react-redux';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';



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
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        const formData = buildFormData(this.state);
        const order = buildOrderForAxios(this.props, formData);
        this.props.onCheesewichOrder(order);
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
        const form = buildForm(this.state, this.inputChangedHandler, this.orderHandler, formElementsArray, this.props.loading);
        return (
            <div className={classes.ContactData}>
                <h3>Enter Your Contact Info</h3>
                {form}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        ings: state.builder.ingredients,
        price: state.builder.price,
        loading: state.order.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheesewichOrder: (orderData) => dispatch(purchaseCheesewich(orderData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
