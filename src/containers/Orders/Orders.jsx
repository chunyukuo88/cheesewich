import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = this.buildFetchedOrders(res);
                this.setState({ orders: fetchedOrders, loading: false});
                console.log(this.state.orders);
            })
            .catch(err => {
                this.setState({ loading: false});
            });
    }

    buildFetchedOrders = (serverResponseObject) => {
        const fetchedOrders = [];
        for(const key in serverResponseObject.data){
            fetchedOrders.push({
                ...serverResponseObject.data[key],
                id: key
            });
        };
        return fetchedOrders;
    }

    render(){
        return (
            <div>

            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
