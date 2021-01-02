import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../store/actions/order';
import { buildFetchedOrders, getContent } from './ordersUtils';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render(){
        return <div>{getContent(this.props)}</div>;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(fetchOrders()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Orders);
