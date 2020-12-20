import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {
        orderForm: {
            name: buildOrderFieldObject('input', 'text', 'Your name'),
            street: buildOrderFieldObject('input', 'text', 'Street'),
            zipCode: buildOrderFieldObject('input', 'text', 'ZIP code'),
            email: buildOrderFieldObject('input', 'email', 'Your email'),
            deliveryMethod: getDeliveryMethodField(),
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {},
            deliveryMethod: 'fastest',
        };
        axios.post('/orders.json', order)
            .then( res => {
                this.setState({loading: false})
            })
            .catch( err => {
                this.setState({loading: false})
            });
    }

    render(){
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact info</h4>
                <form>
                    <Input inputtype="text" name="name" placeholder="Your name" />
                    <Input inputtype="email" name="email" placeholder="Your email" />
                    <Input inputtype="text" name="street" placeholder="Address" />
                    <Input inputtype="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER!</Button>
                </form>
            </div>
        );
    }
}

const buildOrderFieldObject = (elementType, inputType, placeholder, value = '') => {
    return {
        elementType: elementType,
        elementConfig: {
            type: inputType,
            placeholder: placeholder
        },
        value: value
    };
};

const getDeliveryMethodField = () => {
    return {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: ''
    };
};

export default ContactData;
