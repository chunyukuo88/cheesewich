import React, { Component } from 'react';
import axios from '../../axios-orders';
import { buildFetchedOrders, getContent } from './ordersUtils';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = buildFetchedOrders(res);
                this.setState({ orders: fetchedOrders, loading: false});
            })
            .catch(err => {
                this.setState({ loading: false});
            });
    }

    render(){
        return <div>{getContent(this.state)}</div>;
    }
}


export default withErrorHandler(Orders, axios);
