import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import axios from '../../axios-orders';
import { Content } from './ordersUtils';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);

    const contentProps = { orders, loading };

    useEffect(() => {
        dispatch(fetchOrders(token, userId));
    }, [fetchOrders]);

    return <Content {...contentProps}/>;
};


export default withErrorHandler(Orders, axios);
