import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import { getContent } from './ordersUtils';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render(){
        return <div>{getContent(this.props)}</div>;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(fetchOrders(token)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Orders);
