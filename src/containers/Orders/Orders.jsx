import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import { Content } from './ordersUtils';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render(){
        return <Content {...this.props}/>;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Orders);
