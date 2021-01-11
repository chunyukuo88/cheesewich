import React, { Component } from 'react';
import classes from './ContactData.css';
import { purchaseCheesewich } from '../../../store/actions/order';
import { buildForm,
         buildFormData,
         buildInputFieldObject,
         buildOrderForAxios,
         getDeliveryMethodObject,
         mapOrderFormToArray } from './contactDataUtils';
import { connect } from 'react-redux';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import {checkValidity, updateObject} from '../../../utils/utils';


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
        const order = buildOrderForAxios(this.props.ings, this.props.price, this.props.userId, formData);
        const token = this.props.token;
        this.props.onCheesewichOrder(order, token);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true,
        });
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement,
        });

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
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheesewichOrder: (orderData, token) => dispatch(purchaseCheesewich(orderData, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
