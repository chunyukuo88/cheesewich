import React, { useState } from 'react';
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


const initialOrderForm = {
    name: buildInputFieldObject('Your name'),
    street: buildInputFieldObject('Street'),
    zipCode: buildInputFieldObject('ZIP Code', 5, 5),
    country: buildInputFieldObject('Country'),
    email: buildInputFieldObject('Email', null, null, 'email'),
    deliveryMethod: getDeliveryMethodObject(),
};

const ContactData = (props) => {
    const [ orderForm, setOrderForm ] = useState(initialOrderForm);
    const [ formIsValid, setFormIsValid ] = useState(false);

    const orderHandler = ( event ) => {
        event.preventDefault();
        const formData = buildFormData(orderForm);
        const order = buildOrderForAxios(props.ings, props.price, props.userId, formData);
        const token = props.token;
        props.onCheesewichOrder(order, token);
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
            touched: true,
        });
        const updatedOrderForm = updateObject(orderForm, {
            [inputIdentifier]: updatedFormElement,
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = mapOrderFormToArray(orderForm);
    const form = buildForm(formIsValid, inputChangedHandler, orderHandler, formElementsArray, props.loading);
    return (
        <div className={classes.ContactData}>
            <h3>Enter Your Contact Info</h3>
            {form}
        </div>
    );
};

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
