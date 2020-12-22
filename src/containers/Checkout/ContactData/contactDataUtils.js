import React from 'react';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';

export const buildForm = ({ loading, formIsValid }, inputChangedHandler, formElementsArray) => {
    return (loading)
        ? <Spinner/>
        : <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>;
};

export const buildFormData = ({ orderForm }) => {
    const formData = {};
    for (let formElementIdentifier in orderForm) {
        formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    };
    return formData;
};

export const buildInputFieldObject = (placeholder, minLength, maxLength, type) => {
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

export const buildOrderForAxios = ({ingredients, price}, formData) => {
    return {
        ingredients: ingredients,
        price: price,
        orderData: formData,
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) return isValid;
    if (rules.required) isValid = value.trim() !== '' && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid
    return isValid;
};

export const getDeliveryMethodObject = () => {
    return {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: 'fastest',
        validation: {},
        valid: true
    };
};

export const mapOrderFormToArray = (orderFormObject) => {
    const formElementsArray = [];
    for (let key in orderFormObject) {
        formElementsArray.push({
            id: key,
            config: orderFormObject[key]
        });
    }
    return formElementsArray;
};