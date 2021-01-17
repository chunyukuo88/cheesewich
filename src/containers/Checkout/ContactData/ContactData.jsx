import React, { useState } from 'react';
import classes from './ContactData.css';
import { purchaseCheesewich } from '../../../store/actions/order';
import { connect } from 'react-redux';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { checkValidity, updateObject } from '../../../utils/utils';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

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

const deliveryMethodObject = {
    elementType: 'select',
    elementConfig: {
        options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
        ],
    },
    value: 'fastest',
    validation: {},
    valid: true
};

const buildInputFieldObject = (placeholder, minLength, maxLength, type) => {
    const result = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: placeholder,
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    };
    if (minLength) result.validation.minLength = minLength;
    if (maxLength) result.validation.maxLength = maxLength;
    if (type) result.elementConfig.type = type;
    return result;
};

const initialOrderForm = {
    name: buildInputFieldObject('Your name'),
    street: buildInputFieldObject('Street'),
    zipCode: buildInputFieldObject('ZIP Code', 5, 5),
    country: buildInputFieldObject('Country'),
    email: buildInputFieldObject('Email', null, null, 'email'),
    deliveryMethod: deliveryMethodObject,
};

const buildForm = (formIsValid, inputChangedHandler, orderHandler, formElementsArray, loading) => {
    return (loading)
        ? <Spinner/>
        : <form onSubmit={orderHandler} autoComplete="off">
            {formElementsArray.map(formElement => (
                <Input  changed={(event) => inputChangedHandler(event, formElement.id)}
                        elementConfig={formElement.config.elementConfig}
                        elementType={formElement.config.elementType}
                        invalid={!formElement.config.valid}
                        key={formElement.id}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        value={formElement.config.value} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>;
};

const buildFormData = (orderForm) => {
    const formData = {};
    for (let formElementIdentifier in orderForm) {
        formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    };
    return formData;
};

const buildOrderForAxios = (ings, price, id, formData) => {
    return {
        ingredients: ings,
        price: price,
        userId: id,
        orderData: formData,
    };
};

const mapOrderFormToArray = (orderFormObject) => {
    const formElementsArray = [];
    for (let key in orderFormObject) {
        formElementsArray.push({
            id: key,
            config: orderFormObject[key]
        });
    }
    return formElementsArray;
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
