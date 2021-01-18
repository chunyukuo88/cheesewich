import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import axios from '../../axios-orders';
import { Content } from './ordersUtils';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = (props) => {
    const { token, userId, onFetchOrders } = props;

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders]);

    return <Content {...props}/>;
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
