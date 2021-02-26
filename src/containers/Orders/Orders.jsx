import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';

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

const Content = (props) => (props.loading)
        ? <Spinner/>
        : <OrdersContent {...props}/>;

const OrdersContent = ({ orders }) => (orders.length > 0)
    && orders.map(({ingredients, price}, key) => (
         <Order key={key}
                ingredients={ingredients}
                price={price.toFixed(2)}/>
));

export default withErrorHandler(Orders, axios);
