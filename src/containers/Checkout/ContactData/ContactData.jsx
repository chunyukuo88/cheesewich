import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
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
        axios.post('./orders.json', order)
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
                    <input className={classes.input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.input} type="text" name="street" placeholder="Address" />
                    <input className={classes.input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER!</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
