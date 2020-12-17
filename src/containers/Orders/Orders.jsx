import React, { Component } from 'react';
import Order from '../../components/Order/Orders';

class Orders extends Component {
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;
